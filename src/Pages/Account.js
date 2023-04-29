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

  // console.log("user", userInfo)
  // console.log("user app", userApplication)

  return (
    <Container>
      <Row className='text-center my-2'>
        <h3 className='fw-bold'>My Account</h3>
      </Row>
      {/* // account info - application data, login info, ability to edit */}
      <div className='account__card round mb-4'>
        <Row className='mb-2'>
          <div className="d-flex justify-content-between">
            <h3>Account Info</h3>
            <Button className="round">Edit</Button>
          </div>
        </Row>
        <Row className='my-2'>
          <Col>
            <p className='text-black fw-normal m-0'>{userApplication[0]?.user.first_name} {userApplication[0]?.user.middle_name} {userApplication[0]?.user.last_name}</p>
            <p className='text-black fw-normal m-0'>{userApplication[0]?.user.address}</p>
            <p className='text-black fw-normal m-0'>{userApplication[0]?.user.address_city} {userApplication[0]?.user.address_state} {userApplication[0]?.user.address_zip}</p>
            <p className='text-black fw-normal m-0'>{userApplication[0]?.user.phone}</p>
            <p className='text-black fw-normal m-0'>{userApplication[0]?.user.email}</p>
            <p className='text-black fw-normal m-0'>{userApplication[0]?.user.dob}</p>
            <p className='text-black fw-normal m-0'>{userApplication[0]?.user.preferred_contact}</p>
            <p className='text-black fw-normal m-0'>{userApplication[0]?.user.gender}</p>
          </Col>
          <Col>
            <p className='text-black fw-normal m-0'>{userApplication[0]?.user.job_title}</p>
            <p className='text-black fw-normal m-0'>{userApplication[0]?.user.schools}</p>
            <p className='text-black fw-normal m-0'>{userApplication[0]?.user.degrees}</p>
            <p className='text-black fw-normal m-0'>{userApplication[0]?.user.license_number}</p>
            <p className='text-black fw-normal m-0'>{userApplication[0]?.user.license_expiration}</p>
            <p className='text-black fw-normal m-0'>{userApplication[0]?.user.certs}</p>
            <p className='text-black fw-normal m-0'>{userApplication[0]?.user.certs_issuer}</p>
            <p className='text-black fw-normal m-0'>{userApplication[0]?.user.certs_expiration}</p>
            <p className='text-black fw-normal m-0'>{userApplication[0]?.user.practice_setting}</p>
            <p className='text-black fw-normal m-0'>{userApplication[0]?.user.practice_setting_other}</p>
          </Col>
        </Row>
      </div>

      {/* // membership type, status, price */}
      <div className='account__card round mb-4'>
        <Row className='mb-2'>
          <div className="d-flex justify-content-between">
            <h3>Membership</h3>
            <Button className="round">Renew</Button>
          </div>
        </Row>
        <Row className='my-2'>
          <Col>
            <p className='text-black fw-normal m-0'>{userApplication[0]?.user.membership_type}</p>
            <p className='text-black fw-normal m-0'>{userApplication[0]?.user.membership_expiration}</p>
          </Col>
        </Row>
      </div>

      {/* // transactions events, donations, membership payments */}
      <div className='account__card round mb-4'>
        <Row className='mb-2'>
          <h3>Transactions</h3>
        </Row>
        <Row className='my-2'>
          <Col>
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
          <Col>
            <p className='text-black fw-normal'>no events</p>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default Account