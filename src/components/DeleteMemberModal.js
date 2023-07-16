import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { db } from '../firebase'

function DeleteMemberModal({id}) {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const deleteMember = () => {
        db
            .collection('new-members')
            .doc(id)
            .delete()
            .then(() => {
                console.log("Document successfully deleted!");
            }).catch((error) => {
                console.error("Error removing document: ", error);
            })
            setIsLoginModalOpen(false)
    }

    return (
        <>
            <Button outline className='p-0 px-2  position-absolute bottom-0 end-0 bg-danger text-white'
                onClick={() => setIsLoginModalOpen(isLoginModalOpen ? false : true)}
            >Delete</Button>
            <Modal
                className=''
                size="md"
                isOpen={isLoginModalOpen}
                toggle={() => setIsLoginModalOpen(isLoginModalOpen ? false : true)}
            >
                <ModalHeader className=' bg-danger round-top' toggle={() => setIsLoginModalOpen(false)}>
                    <p className='m-0 fs-3'><strong>⚠️ Are you sure?</strong></p>
                </ModalHeader>
                <ModalBody className='d-flex flex-column pt-4'>
                    <p className='text-danger fs-3 text-center my-5'>This cannot be undone</p>
                    <div className='d-flex justify-content-between'>
                        <Button onClick={() => setIsLoginModalOpen(isLoginModalOpen ? false : true)} className='fw-bold'>Cancel</Button>
                        <Button onClick={deleteMember} className='fw-bold bg-danger'>⚠️ Delete Card</Button>
                    </div>
                </ModalBody>
            </Modal>
        </>
    )
}

export default DeleteMemberModal