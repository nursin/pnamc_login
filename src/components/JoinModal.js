import React, { useState } from 'react';
import { Button, Col, Input, Modal, ModalBody, ModalFooter, ModalHeader, Progress } from 'reactstrap';
import pnamc_logo from '../PNAMC_chapter_logo_transparent.png';

const memberApplication = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/PNAMCMembershipApplicationForm.doc?alt=media&token=f54bb1ad-0b8f-4e7f-a90a-1456e68389f8"


function JoinModal() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

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
                    <Button
                        className='membership__formButton mx-auto m-3'
                        href={memberApplication}
                    >
                        Join/Renew by Mail
                    </Button>
                    <Button
                        className='membership__formButton mx-auto'
                        href='https://mypnaa.org/Membership-Form'
                        target="_blank"
                        rel="noreferrer"
                    >
                        Apply at PNAA.org
                    </Button>
                </ModalBody>
            </Modal>
        </>
    )
}

export default JoinModal