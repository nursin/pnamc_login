import React, { useState } from 'react';
import { Button, Col, Input, Modal, ModalBody, ModalFooter, ModalHeader, Progress } from 'reactstrap';
import pnamc_logo from '../PNAMC_chapter_logo_transparent.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { auth, googleAuthProvider, actionCodeSettings } from '../firebase';
import firebase from 'firebase';
import no_image from "../empty_profile.jpeg"

// redux
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setUserOrCreateAndSet } from '../redux/slices/user';
import { useNavigate } from 'react-router-dom';

const memberApplication = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/PNAMCMembershipApplicationForm.doc?alt=media&token=f54bb1ad-0b8f-4e7f-a90a-1456e68389f8"

function SigninModal() {
    const [isSigninModalOpen, setIsSigninModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const sendSignInLinkToEmail = () => {
        auth.sendSignInLinkToEmail(email, actionCodeSettings)
            .then(() => {
                // The link was successfully sent. Inform the user.
                // Save the email locally so you don't need to ask the user for it again
                // if they open the link on the same device.
                window.localStorage.setItem('emailForSignIn', email);
                setIsSigninModalOpen(isSigninModalOpen ? false : true)
                alert(`Follow the link sent to ${email} to complete login`);
            })
            .catch((error) => {
                // link failed to send or work alert user
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode);
                alert(errorMessage);
            });
    }
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
            <Button className='navbar__signin text-md-center fw-bold mx-3 p-0'
                onClick={() => setIsSigninModalOpen(isSigninModalOpen ? false : true)}
            ><img src={no_image} className="profileAvatar-noImage"/></Button>
            <Modal
                className='createWurker__modal'
                size="sm"
                isOpen={isSigninModalOpen}
                toggle={() => setIsSigninModalOpen(isSigninModalOpen ? false : true)}
            >
                <ModalHeader toggle={() => setIsSigninModalOpen(false)}>
                    <h3 className='text-secondary m-0'><strong>Sign in</strong></h3>
                </ModalHeader>
                <ModalBody className='d-flex flex-column pt-4'>
                    <img src={pnamc_logo} className="mx-auto" alt="PNAMC Logo" />
                    <p className='alt-p text-black text-center mt-3 mb-1'>Login/Join by clicking an option</p>
                    <Input
                        className='text-center round p-2 mx-auto'
                        placeholder="Enter email address"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Button
                        className='signin__email mx-auto fw-bold m-2'
                        onClick={sendSignInLinkToEmail}
                    >
                        Continue with email
                    </Button>
                    <p className='text-black text-center fw-normal mb-2'>or</p>
                    <Button
                        className='signin__googleFormButton mx-auto fw-bold mb-2'
                        onClick={signInWithGoogle}
                    >
                        Continue with Google
                        <FontAwesomeIcon icon={faGoogle} className="fs-5 ms-2" />
                    </Button>
                    {/* takes user to the create  */}
                    {/* <p className='text-black text-center mt-4 mb-0'>Dont have an account?</p>
                    <a href='' className='alt-text text-center mx-auto'>Create an account</a> */}
                    <hr />
                    <p className='alt-p text-black text-center mb-0 mt-2'>Other options below</p>
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

export default SigninModal