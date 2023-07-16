import React, { useState } from 'react';
import { Button, Input, Modal, ModalBody, ModalHeader, Tooltip } from 'reactstrap';
import pnamc_logo from '../PNAMC_chapter_logo_transparent.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { auth, googleAuthProvider, actionCodeSettings, db } from '../firebase';
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

    const { user } = useSelector((state) => state.user);

    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);

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
            <Button className='navbar__signin text-md-center fw-bold mx-3 p-0' id="loginImage"
                onClick={() => setIsSigninModalOpen(isSigninModalOpen ? false : true)}
            ><img src={no_image} className="profileAvatar-noImage" /></Button>
            <Tooltip placement="bottom" isOpen={tooltipOpen} target="loginImage" toggle={toggle}>
                Click to login
            </Tooltip>
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
                    <Button
                        className='signin__googleFormButton mx-auto fw-bold mt-4'
                        onClick={signInWithGoogle}
                    >
                        Continue with Google
                        <FontAwesomeIcon icon={faGoogle} className="fs-5 ms-2" />
                    </Button>
                </ModalBody>
            </Modal>
        </>
    )
}

export default SigninModal