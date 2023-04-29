import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Row, Container, Col, FormGroup, Input, Label, Table } from "reactstrap";
import { db } from '../firebase'
import ProductCard from "../components/ProductCard"
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

function MembershipPayment() {
  // redux
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [membershipType, setMembershipType] = useState();

  //stripe payment
  const stripe = useStripe();
  const elements = useElements();

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
        <Row>
          <h3>Select a Membership</h3>
        </Row>
        <Row>
          <Col md={6}>
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
            <h3>{membershipType?.toUpperCase()}</h3>
            <h3>Total: {membershipType ? membershipType?.slice(-4) : '$0'}</h3>
            <CardElement className='border p-2 round' />
            <Button onClick={handlePay} className='me-auto mt-3 membership__formButton fw-bold'>Pay Now</Button>
          </Col>
        </Row>
      </Container>
    </div >
  )
}

export default MembershipPayment