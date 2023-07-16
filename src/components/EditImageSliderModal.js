import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Modal, ModalBody, Row, ModalHeader, Form, FormGroup, Input, Label } from 'reactstrap';
import firebase from 'firebase';
import { db } from '../firebase'

function EditImageSliderModal(props) {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [sectionHeader, setSectionHeader] = useState('');

    // redux
    const { user } = useSelector((state) => state.user);

    useEffect(() => {
        setSectionHeader(props.sectionHeader)
    }, [props])

    const handleEditText = (e) => {
        e.preventDefault();

        db
            .collection("sections")
            .doc('GJzhEiT4Vocr5UxfHaQh')
            .set({
                last_modified: firebase.firestore.FieldValue.serverTimestamp(),
                auth_uid: user.uid,
                header: sectionHeader,
            })
        setIsLoginModalOpen(false)
    }

    return (
        <>
            <Button outline className='me-3 mb-1 py-1 px-3 rounded fs-5 fw-bold my-auto'
                onClick={() => setIsLoginModalOpen(isLoginModalOpen ? false : true)}
            >Edit Section Header</Button>

            <Modal
                className=''
                size="md"
                isOpen={isLoginModalOpen}
                toggle={() => setIsLoginModalOpen(isLoginModalOpen ? false : true)}
            >
                <ModalHeader toggle={() => setIsLoginModalOpen(false)}>
                    <p className='text-secondary m-0'><strong>Edit Text for {props.sectionHeader}</strong></p>
                </ModalHeader>
                <ModalBody className='d-flex flex-column pt-4'>
                    <Form onSubmit={handleEditText}>
                        <Row>
                            <FormGroup floating>
                                <Input
                                    id="sectionHeader"
                                    placeholder="Enter member name"
                                    value={sectionHeader}
                                    onChange={e => setSectionHeader(e.target.value)}
                                    required
                                />
                                <Label for="sectionHeader">
                                    Section Header
                                </Label>
                            </FormGroup>
                        </Row>
                        <Button className='fw-bold w-100'>Submit</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </>
    )
}

export default EditImageSliderModal