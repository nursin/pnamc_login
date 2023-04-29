import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Row, Container, Col, FormGroup, Input, Label } from "reactstrap";
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

  useEffect(() => {
    if (membershipType === "regular member 1 year - $85") {
      setMembershipTotal(85*1.04)
      setProcessingFee(85*0.04)
    } else if (membershipType === "regular member 2 year - $170") {
      setMembershipTotal(170*1.04)
      setProcessingFee(170*0.04)
    }
    
  }, [membershipType])
  const handleClick = () => {
    alert("selected");
  }

  const handlePay = () => {
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
    navigate('/account')
  }

  // useEffect(() => {
  //   console.log(membershipType)
  // }, [membershipType])

  return (
    <div>
      <Container className="my-2">
        <Row className='membershipPayment d-flex align-content-center'>
          <Col md={6}>
            <h3>Select a Membership</h3>
            <FormGroup tag="fieldset">
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
          <Col className='membershipPayment__right'>
            <h3 className='text-center'>{membershipType?.toUpperCase()}</h3>
            <CardElement className='border p-2 round' />
            <div className='d-flex justify-content-between mt-3'>
              <div>
                <p className='text-black fw-normal m-0'>Processing fee (4%): ${processingFee.toFixed(2)}</p>
                <h3>Total: ${membershipTotal.toFixed(2)}</h3>
              </div>
              <div>
                <Button onClick={handlePay} className='me-auto membership__formButton fw-bold'>Pay Now</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  )
}

export default MembershipPayment