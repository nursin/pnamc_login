import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Container, Row } from 'reactstrap'
import { db } from '../firebase'
import moment from 'moment'; // handy for timestamps

function Account() {
  // redux
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState('');
  const [userApplication, setUserApplication] = useState('');
  const [transactions, setTransactions] = useState([]);

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

    if (user) {
      db
        .collection('users')
        .doc(user?.uid)
        .collection('transactions')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => (
          setTransactions(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          })))
        ))
    } else {
      setTransactions([])
    }

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
  // console.log(transactions)

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
            {/* <Button className="round">Edit</Button> */}
          </div>
        </Row>
        <Row className='my-2'>
          <Col md={6}>
            <p className='text-black fw-normal m-0'><span className='fw-bold'>Name:</span> {userApplication[0]?.user.first_name.toUpperCase()} {userApplication[0]?.user.middle_name.toUpperCase()} {userApplication[0]?.user.last_name.toUpperCase()}</p>
            <p className='text-black fw-normal m-0'><span className='fw-bold'>Address:</span> {userApplication[0]?.user.address.toUpperCase()}</p>
            <p className='text-black fw-normal m-0'><span className='fw-bold'>City, State, Zip:</span> {userApplication[0]?.user.address_city.toUpperCase()} {userApplication[0]?.user.address_state.toUpperCase()} {userApplication[0]?.user.address_zip}</p>
            <p className='text-black fw-normal m-0'><span className='fw-bold'>Phone:</span> {userApplication[0]?.user.phone}</p>
            <p className='text-black fw-normal m-0'><span className='fw-bold'>Email:</span> {userApplication[0]?.user.email.toUpperCase()}</p>
            <p className='text-black fw-normal m-0'><span className='fw-bold'>DOB:</span> {userApplication[0]?.user.dob}</p>
            <p className='text-black fw-normal m-0'><span className='fw-bold'>Preferred Contact:</span> {userApplication[0]?.user.preferred_contact.toUpperCase()}</p>
            <p className='text-black fw-normal m-0'><span className='fw-bold'>Gender:</span> {userApplication[0]?.user.gender.toUpperCase()}</p>
          </Col>
          <Col>
            <p className='text-black fw-normal m-0'><span className='fw-bold'>Job Title:</span> {userApplication[0]?.user.job_title.toUpperCase()}</p>
            <p className='text-black fw-normal m-0'><span className='fw-bold'>Schools:</span> {userApplication[0]?.user.schools.toUpperCase()}</p>
            <p className='text-black fw-normal m-0'><span className='fw-bold'>Degrees:</span> {userApplication[0]?.user.degrees.toUpperCase()}</p>
            <p className='text-black fw-normal m-0'><span className='fw-bold'>License #:</span> {userApplication[0]?.user.license_number.toUpperCase()}</p>
            <p className='text-black fw-normal m-0'><span className='fw-bold'>License Expires:</span> {userApplication[0]?.user.license_expiration}</p>
            <p className='text-black fw-normal m-0'><span className='fw-bold'>Certification(s):</span> {userApplication[0]?.user.certs.toUpperCase()}</p>
            <p className='text-black fw-normal m-0'><span className='fw-bold'>Certifications Issuer(s):</span> {userApplication[0]?.user.certs_issuer.toUpperCase()}</p>
            <p className='text-black fw-normal m-0'><span className='fw-bold'>Certification Expires:</span> {userApplication[0]?.user.certs_expiration}</p>
            <p className='text-black fw-normal m-0'><span className='fw-bold'>Practice Setting:</span> {userApplication[0]?.user.practice_setting.toUpperCase()}</p>
            <p className='text-black fw-normal m-0'><span className='fw-bold'>Practice Setting Other:</span> {userApplication[0]?.user.practice_setting_other ? userApplication[0]?.user.practice_setting_other.toUpperCase() : "N/A"}</p>
          </Col>
        </Row>
      </div>

      {/* // membership type, status, price */}
      <div className='account__card round mb-4'>
        <Row className='mb-2'>
          <div className="d-flex justify-content-between">
            <h3>Membership</h3>
            {/* <Button className="round">Renew</Button> */}
          </div>
        </Row>
        <Row className='my-2'>
          <Col>
            <p className='text-black fw-normal m-0'><span className='fw-bold'>Member Type:</span> {userApplication[0]?.user.membership_type.toUpperCase()}</p>
            <p className='text-black fw-normal m-0'><span className='fw-bold'>Expires:</span> {userInfo[0]?.user.membership_exp?.seconds ? moment(userInfo[0]?.user.membership_exp?.seconds * 1000).year(moment(userInfo[0]?.user.membership_exp?.seconds * 1000).year() + 1).format('MMMM Do YYYY') : userInfo[0]?.user.membership_exp}</p>
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
            {transactions.length > 0 ? transactions.map(transaction => (
              // <Transaction transaction={transaction} />
              <>
                <Row>
                  <Col md={6}>
                    <p className='text-black fw-normal m-0'><span className='fw-bold'>Product Name:</span> {transaction?.data.product_name.toUpperCase()}</p>
                    <p className='text-black fw-normal m-0'><span className='fw-bold'>Product Type:</span> {transaction?.data.product_type.toUpperCase()}</p>
                    <p className='text-black fw-normal m-0'><span className='fw-bold'>Transaction Date:</span> {moment(transaction?.data.created * 1000).format('MMMM Do YYYY, h:mm a')}</p>
                    <p className='text-black fw-normal m-0'><span className='fw-bold'>Transaction ID:</span> {transaction?.id}</p>
                  </Col>
                  <Col>
                    <p className='text-black fw-normal m-0'><span className='fw-bold'>Product Price:</span> ${transaction?.data.product_price.toFixed(2)}</p>
                    <p className='text-black fw-normal m-0'><span className='fw-bold'>Processing Fee:</span> ${transaction?.data.processing_fee.toFixed(2)}</p>
                    <p className='text-black fw-normal m-0'><span className='fw-bold'>Total Paid:</span> ${transaction?.data.total_paid.toFixed(2)}</p>
                  </Col>
                  <hr className='' />
                </Row>
              </>
            ))
              :
              <p className='text-black fw-normal'>No Transactions Yet</p>
            }
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