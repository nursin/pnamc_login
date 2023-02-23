import React, { useState } from 'react';
import { Button, Col, Input, Modal, ModalBody, ModalFooter, ModalHeader, Progress } from 'reactstrap';
import pnamc_logo from '../PNAMC_chapter_logo_transparent.png';
import { auth, googleAuthProvider} from '../firebase';

// redux shit
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../redux/slices/user';
import { Link } from 'react-router-dom';

const memberApplication = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/PNAMCMembershipApplicationForm.doc?alt=media&token=f54bb1ad-0b8f-4e7f-a90a-1456e68389f8"

function JoinModal() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

        // redux shit
    // const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const joinNowWithGoogle = () => {
        auth.signInWithPopup(googleAuthProvider)
            .then((payload) => {
                dispatch(createUser(payload));
            })
            .catch((error) => alert(error.message));
    }

    return (
        <>
            <Button outline className='navbar__joinNow text-md-center fw-bold'
                onClick={() => setIsLoginModalOpen(isLoginModalOpen ? false : true)}
            >Join/Renew Now</Button>
            <Modal
                className='createWurker__modal'
                size="sm"
                isOpen={isLoginModalOpen}
                toggle={() => setIsLoginModalOpen(isLoginModalOpen ? false : true)}
            >
                <ModalHeader toggle={() => setIsLoginModalOpen(false)}>
                    <h3 className='text-secondary m-0'><strong>Join/Renew Now</strong></h3>
                </ModalHeader>
                <ModalBody className='d-flex flex-column pt-4'>
                    <img src={pnamc_logo} className="mx-auto" alt="PNAMC Logo" />
                    {/* create account takes user to fill out application to join & create account login */}
                    <Link
                        className='joinModal__createAccount mx-auto m-3 p-2'
                        to="/create-account"
                        onClick={() => setIsLoginModalOpen(false)}
                    >
                        Create an account
                    </Link>
                    <p className='text-black text-center fs-6 m-0 p-0'>If you have an account already, sign in instead</p>
                    <a
                        className='alt-text mx-auto'
                        href={memberApplication}
                    >
                        Join/Renew by Mail
                    </a>
                    <a
                        className='alt-text mx-auto'
                        href='https://mypnaa.org/Membership-Form'
                        target="_blank"
                        rel="noreferrer"
                    >
                        Apply at PNAA.org
                    </a>
                </ModalBody>
            </Modal>
        </>
    )
}

export default JoinModal