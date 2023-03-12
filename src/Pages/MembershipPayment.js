import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap'
import { db } from '../firebase'

function MembershipPayment() {
  // redux
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePay = () => {
    console.log("paid")
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

  return (
    <div>
      <Button onClick={handlePay}>pay membership</Button>
    </div>
  )
}

export default MembershipPayment