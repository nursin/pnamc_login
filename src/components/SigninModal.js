import React, { useState } from 'react';
import { Button, Col, Input, Modal, ModalBody, ModalFooter, ModalHeader, Progress } from 'reactstrap';
import pnamc_logo from '../PNAMC_chapter_logo_transparent.png';

const memberApplication = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/PNAMCMembershipApplicationForm.doc?alt=media&token=f54bb1ad-0b8f-4e7f-a90a-1456e68389f8"


function SigninModal() {
    const [isSigninModalOpen, setIsSigninModalOpen] = useState(false);

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
                        className='singin__googleFormButton mx-auto m-3'
                    >
                        Sign in with Google
                    </Button>
                    <Button
                        className='membership__formButton mx-auto'
                    >
                        Sign in with email
                    </Button>
                </ModalBody>
            </Modal>
        </>
    )
}

export default SigninModal