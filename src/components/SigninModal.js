import React, { useState } from 'react';
import { Button, Col, Input, Modal, ModalBody, ModalFooter, ModalHeader, Progress } from 'reactstrap';
import pnamc_logo from '../PNAMC_chapter_logo_transparent.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { auth, googleAuthProvider } from '../firebase';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setUserOrCreateAndSet } from '../redux/slices/user';

function SigninModal() {
    const [isSigninModalOpen, setIsSigninModalOpen] = useState(false);

    const dispatch = useDispatch();

    const signInWithGoogle = () => {
        auth.signInWithPopup(googleAuthProvider)
            .then((payload) => {
                dispatch(setUserOrCreateAndSet(payload))
            })
            .catch((error) => alert(error.message));
    }

    return (
        <>
            <Button outline className='navbar__signin text-md-center fw-bold ms-2'
                onClick={() => setIsSigninModalOpen(isSigninModalOpen ? false : true)}
            >Sign in</Button>
            <Modal
                className='createWurker__modal'
                size="sm"
                isOpen={isSigninModalOpen}
                toggle={() => setIsSigninModalOpen(isSigninModalOpen ? false : true)}
            >
                <ModalHeader toggle={() => setIsSigninModalOpen(false)}>
                    <h3 className='text-secondary m-0'><strong>Join/Renew Now</strong></h3>
                </ModalHeader>
                <ModalBody className='d-flex flex-column pt-4'>
                    <img src={pnamc_logo} className="mx-auto" alt="PNAMC Logo" />
                    <Button
                        className='signin__googleFormButton mx-auto fw-bold m-3'
                        onClick={signInWithGoogle}
                    >
                        Sign in with Google
                        <FontAwesomeIcon icon={faGoogle} className="fs-5 ms-2" />
                    </Button>
                    <Button
                        className='signin__email mx-auto fw-bold'
                    >
                        Sign in with email
                    </Button>
                    {/* takes user to the create  */}
                    <p className='text-black text-center mt-4 mb-0'>Dont have an account?</p>
                    <a href='' className='alt-text text-center mx-auto'>Create an account</a>
                </ModalBody>
            </Modal>
        </>
    )
}

export default SigninModal