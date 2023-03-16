import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Container, Row } from 'reactstrap'
import { db } from '../firebase'

function Account() {
  // redux
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState('');
  const [userApplication, setUserApplication] = useState('');

  useEffect(() => {
    if (!user) return;
    db
      .collection('users')
      .where('auth_uid', '==', `${user?.uid}`)
      .onSnapshot(snapshot => {
        setUserInfo(snapshot.docs.map(doc => ({
          id: doc.id,
          user: doc.data()
        })));
      })
    db
      .collection('users-applications')
      .where('auth_uid', '==', `${user?.uid}`)
      .onSnapshot(snapshot => {
        setUserApplication(snapshot.docs.map(doc => ({
          id: doc.id,
          user: doc.data()
        })));
      })
  }, [user]);

  useEffect(() => {
    if (userInfo[0]?.user.has_app_on_file === false) {
      navigate('/create-account')
    } else if (userInfo[0]?.user.has_paid_membership === false) {
      navigate('/membership-payment')
    }
  }, [userInfo])

  console.log("user", userInfo)
  console.log("user app", userApplication)
  return (
    <Container>
      <Row className='text-center my-2'>
        <h3 className='fw-bold'>My Account</h3>
      </Row>
      {/* // account info - application data, login info, ability to edit */}
      <div className='account__card round mb-4'>
        <Row className='mb-2'>
          <h3>Account Info</h3>
        </Row>
        <Row className='my-2'>
          <Col className='p-4'>
            <p className='text-black fw-normal'>{userApplication[0]?.user.address}</p>
          </Col>
        </Row>
      </div>

      {/* // membership type, status, price */}
      <div className='account__card round mb-4'>
        <Row className='mb-2'>
          <h3>Membership</h3>
        </Row>
        <Row className='my-2'>
          <Col className='p-4'>
            <p className='text-black fw-normal mb-4'>{userApplication[0]?.user.membership_type}</p>
          </Col>
        </Row>
      </div>

      {/* // transactions events, donations, membership payments */}
      <div className='account__card round mb-4'>
        <Row className='mb-2'>
          <h3>Transactions</h3>
        </Row>
        <Row className='my-2'>
          <Col className='p-4'>
            <p className='text-black fw-normal'>no transactions</p>
          </Col>
        </Row>
      </div>

      {/* // my events - events paid for, upgrade later with QR code for entry? */}
      <div className='account__card round mb-4'>
        <Row className='mb-2'>
          <h3>Events</h3>
        </Row>
        <Row className='my-2'>
          <Col className='p-4'>
            <p className='text-black fw-normal'>no events</p>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default Account