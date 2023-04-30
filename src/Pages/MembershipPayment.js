import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Row, Container, Col, FormGroup, Input, Label, Form } from "reactstrap";
import { db } from '../firebase'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from '../axios';

function MembershipPayment() {
  // redux
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [membershipType, setMembershipType] = useState();
  const [membershipTotal, setMembershipTotal] = useState(0.00);
  const [processingFee, setProcessingFee] = useState(0.00);

  //stripe payment
  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState('');
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe secret which allows us to charge customer
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        //stripe expects the total in a currencies subunits 10 dollars is 10000 cents times by 100 to get usd subcurrency
        url: `/payments/create?total=${membershipTotal * 100}`
      });
      setClientSecret(response.data.clientSecret)
    }
    getClientSecret();
    setError(null)
  }, [membershipTotal])

  useEffect(() => {
    if (membershipType === "regular member 1 year - $85") {
      setMembershipTotal(85 * 1.04 + 0.30)
      setProcessingFee(85 * 0.04 + 0.30)
    } else if (membershipType === "regular member 2 year - $170") {
      setMembershipTotal(170 * 1.04 + 0.30)
      setProcessingFee(170 * 0.04 + 0.30)
    } else if (membershipType === "associate member 1 year - $60") {
      setMembershipTotal(60 * 1.04 + 0.30)
      setProcessingFee(60 * 0.04 + 0.30)
    } else if (membershipType === "associate member 2 year - $120") {
      setMembershipTotal(120 * 1.04 + 0.30)
      setProcessingFee(120 * 0.04 + 0.30)
    } else if (membershipType === "retired non-practicing member 1 year - $60") {
      setMembershipTotal(60 * 1.04 + 0.30)
      setProcessingFee(60 * 0.04 + 0.30)
    } else if (membershipType === "retired non-practicing member 2 year - $120") {
      setMembershipTotal(120 * 1.04 + 0.30)
      setProcessingFee(120 * 0.04 + 0.30)
    } else if (membershipType === "student member 1 year - $60") {
      setMembershipTotal(60 * 1.04 + 0.30)
      setProcessingFee(60 * 0.04 + 0.30)
    } else if (membershipType === "student member 2 year - $120") {
      setMembershipTotal(120 * 1.04 + 0.30)
      setProcessingFee(120 * 0.04 + 0.30)
    } else if (membershipType === "auxillary member 1 year - $25") {
      setMembershipTotal(25 * 1.04 + 0.30)
      setProcessingFee(25 * 0.04 + 0.30)
    } else if (membershipType === "auxillary member 2 year - $50") {
      setMembershipTotal(50 * 1.04 + 0.30)
      setProcessingFee(50 * 0.04 + 0.30)
    }

  }, [membershipType])

  const handleSubmitCredit = async (e) => {
    // do all the fancy stripe stuff
    console.log("credit processing")
    e.preventDefault();
    setProcessing(true);

    // await stripe payment confirmation
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {
      //paymentintent = payment confirmation
      db
        .collection('users')
        .doc(user.uid)
        .collection('transactions')
        .doc(paymentIntent.id)
        .set({
          product_type: "membership",
          product_name: membershipType,
          product_price: membershipTotal - processingFee,
          processing_fee: processingFee,
          total_paid: paymentIntent.amount,
          created: paymentIntent.created
        })

      db
        .collection("users")
        .doc(user.uid)
        .set({
          has_paid_membership: true
        },
          {
            merge: true
          }
        )

      setSucceeded(true);
      setError(null);
      setProcessing(false);
      navigate('/account')
    })
  }

  const handleChange = e => {
    // Listen for changes in CardElement
    // and display any errors as the customer types their card detaiLS
    if (membershipTotal * 100 === 0) {
      setError(`Order total cannot be $${membershipTotal.toFixed(2)}`)
    } else if (membershipTotal * 100 > 20001) {
      setError("Order total too high")
    } else {
      setDisabled(e.empty);
      setError(e.error ? e.error.message : '')
    }
  }

  // useEffect(() => {
  //   console.log(membershipType)
  // }, [membershipType])

  return (
    <div>
      <Container fluid className="g-0">
        <Form onSubmit={handleSubmitCredit}>
          <Row className='membershipPayment'>
            <Col className='d-flex justify-content-center align-items-center' md={6}>
              <FormGroup tag="fieldset">
                <h3>Select a Membership</h3>
                <FormGroup check className='mb-1'>
                  <Label check className='cursor'>
                    <Input
                      type="radio"
                      name="radio1"
                      value={'regular member 1 year - $85'}
                      className='cursor'
                      onChange={(e) => {
                        setMembershipType(e.target.value);
                      }}
                    />{' '}
                    Regular Member 1 Year - $85
                  </Label>
                </FormGroup>
                <FormGroup check className='mb-1'>
                  <Label check className='cursor'>
                    <Input
                      type="radio"
                      name="radio1"
                      value={'regular member 2 year - $170'}
                      className='cursor'
                      onChange={(e) => {
                        setMembershipType(e.target.value);
                      }}
                    />{' '}
                    Regular Member 2 Year - $170
                  </Label>
                </FormGroup>
                <FormGroup check className='mb-1'>
                  <Label check className='cursor'>
                    <Input
                      type="radio"
                      name="radio1"
                      value={'associate member 1 year - $60'}
                      className='cursor'
                      onChange={(e) => {
                        setMembershipType(e.target.value);
                      }}
                    />{' '}
                    Associate Member 1 Year - $60
                  </Label>
                </FormGroup>
                <FormGroup check className='mb-1'>
                  <Label check className='cursor'>
                    <Input
                      type="radio"
                      name="radio1"
                      value={'associate member 2 year - $120'}
                      className='cursor'
                      onChange={(e) => {
                        setMembershipType(e.target.value);
                      }}
                    />{' '}
                    Associate Member 2 Year - $120
                  </Label>
                </FormGroup>
                <FormGroup check className='mb-1'>
                  <Label check className='cursor'>
                    <Input
                      type="radio"
                      name="radio1"
                      value={'retired non-practicing member 1 year - $60'}
                      className='cursor'
                      onChange={(e) => {
                        setMembershipType(e.target.value);
                      }}
                    />{' '}
                    Retired Non-Practicing Member 1 Year - $60
                  </Label>
                </FormGroup>
                <FormGroup check className='mb-1'>
                  <Label check className='cursor'>
                    <Input
                      type="radio"
                      name="radio1"
                      value={'retired non-practicing member 2 year - $120'}
                      className='cursor'
                      onChange={(e) => {
                        setMembershipType(e.target.value);
                      }}
                    />{' '}
                    Retired Non-Practicing Member 2 Year - $120
                  </Label>
                </FormGroup>
                <FormGroup check className='mb-1'>
                  <Label check className='cursor'>
                    <Input
                      type="radio"
                      name="radio1"
                      value={'student member 1 year - $60'}
                      className='cursor'
                      onChange={(e) => {
                        setMembershipType(e.target.value);
                      }}
                    />{' '}
                    Student Member 1 Year - $60
                  </Label>
                </FormGroup>
                <FormGroup check className='mb-1'>
                  <Label check className='cursor'>
                    <Input
                      type="radio"
                      name="radio1"
                      value={'student member 2 year - $120'}
                      className='cursor'
                      onChange={(e) => {
                        setMembershipType(e.target.value);
                      }}
                    />{' '}
                    Student Member 2 Year - $120
                  </Label>
                </FormGroup>
                <FormGroup check className='mb-1'>
                  <Label check className='cursor'>
                    <Input
                      type="radio"
                      name="radio1"
                      value={'auxillary member 1 year - $25'}
                      className='cursor'
                      onChange={(e) => {
                        setMembershipType(e.target.value);
                      }}
                    />{' '}
                    Auxillary Member 1 Year - $25
                  </Label>
                </FormGroup>
                <FormGroup check className='mb-1'>
                  <Label check className='cursor'>
                    <Input
                      type="radio"
                      name="radio1"
                      value={'auxillary member 2 year - $50'}
                      className='cursor'
                      onChange={(e) => {
                        setMembershipType(e.target.value);
                      }}
                    />{' '}
                    Auxillary Member 2 Year - $50
                  </Label>
                </FormGroup>
              </FormGroup>
            </Col>
            <Col className='membershipPayment__right mx-2 d-flex justify-content-center align-items-center'>
                <h3 className='text-center'>{membershipType ? membershipType?.toUpperCase() : "Select a membership"}</h3>
                <CardElement onChange={handleChange} className='border p-3 rounded bg-white w-50' />
                <div className='d-flex justify-content-between mt-3 w-50'>
                  <div>
                    <p className='text-black fw-normal m-0'>Processing fee (4%+$0.30): ${processingFee.toFixed(2)}</p>
                    <h3>Total: ${membershipTotal.toFixed(2)}</h3>
                  </div>
                  <div>
                    <Button disabled={processing || disabled || succeeded} className='me-auto membership__formButton fw-bold'>{processing ? "Processing" : 'Pay Now'}</Button>
                  </div>
                </div>
                {/* Errors */}
                {error && <div>{error}</div>}
                <h6 className='mt-5'>If you want to pay another way, logout, and contact PNAMC president.</h6>
            </Col>
          </Row>
        </Form>
        {/* below is a alternate payment methods route to bypass credit, but may do this in admin page and have admins complete */}
        {/* <Row>
            <Col className='text-center'>
              <p className='text-black fw-normal'>Want to pay with check, CashApp, other. <br /> Click the button below to continue, & contact <br /> president to complete payment</p>
              <Button className=''>Alternative Payment Methods</Button>
            </Col>
          </Row> */}

      </Container>
    </div >
  )
}

export default MembershipPayment