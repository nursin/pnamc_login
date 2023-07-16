import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Modal, ModalBody, Row, ModalHeader, Progress, Form, FormGroup, Input, Label } from 'reactstrap';
import firebase from 'firebase';
import { db, storage } from '../firebase'

function EditMemberImageSliderModal(props) {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [imageURL, setImageURL] = useState('');


    const [imageFile, setImageFile] = useState(null);
    const [progress, setProgress] = useState(0);

    const [error, setError] = useState("")
    const [processing, setProcessing] = useState('');
    const [disabled, setDisabled] = useState(true);

    // redux
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleImage = (e) => {
        if (e.target.files[0]) {
            setImageFile(e.target.files[0])
        }
    };

    useEffect(() => {
        setText(props.text)
        setTitle(props.title)
        setImageURL(props.image)
    }, [props])

    const handleEditNewMemberDisplay = (e) => {
        e.preventDefault();

        if (imageFile) {
            const uploadTask = storage.ref(`new-member-banner/${title.split(" ").join("_")}_new_member`).put(imageFile);
            // progress bar function
            uploadTask.on(
                "state-changed",
                (snapshot) => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setProgress(progress);
                },
                (error) => {
                    console.log(error);
                    alert(error.message);
                },
                // storing in db
                () => {
                    storage
                        .ref("new-member-banner")
                        .child(`${title.split(" ").join("_")}_new_member`)
                        .getDownloadURL()
                        .then(url => {
                            // post image in db
                            db
                                .collection("new-members")
                                .doc(props.id)
                                .set({
                                    last_modified: firebase.firestore.FieldValue.serverTimestamp(),
                                    auth_uid: user.uid,
                                    title: title,
                                    text: text,
                                    image_alt_text: `${title} new member image`,
                                    image: url
                                },
                                    {
                                        merge: true
                                    });
                            setProgress(0);
                            setIsLoginModalOpen(false)
                        })
                }
            )
        } else {
            db
                .collection("new-members")
                .doc(props.id)
                .set({
                    last_modified: firebase.firestore.FieldValue.serverTimestamp(),
                    auth_uid: user.uid,
                    title: title,
                    text: text,
                    image_alt_text: `${title} new member image`,
                    image: imageURL
                },
                    {
                        merge: true
                    });
            setIsLoginModalOpen(false)
        }

    };
    return (
        <>
            <Button outline className='mb-1 py-1 px-3 fs-5 fw-bold position-absolute end-0 bg-white text-secondary'
                onClick={() => setIsLoginModalOpen(isLoginModalOpen ? false : true)}
            >Edit Card</Button>

            <Modal
                className='createWurker__modal'
                size="md"
                isOpen={isLoginModalOpen}
                toggle={() => setIsLoginModalOpen(isLoginModalOpen ? false : true)}
            >
                <ModalHeader toggle={() => setIsLoginModalOpen(false)}>
                    <p className='text-secondary m-0'><strong>Edit New Member</strong></p>
                </ModalHeader>
                <ModalBody className='d-flex flex-column pt-4'>
                    <Form onSubmit={handleEditNewMemberDisplay}>
                        <Row>
                            <FormGroup floating>
                                <Input
                                    id="imageUpload"
                                    placeholder="Upload Profile Image"
                                    type="file"
                                    onChange={handleImage}
                                />
                                <Label for="imageUpload">
                                    Upload Member Image
                                </Label>
                            </FormGroup>
                            <FormGroup floating>
                                <Input
                                    id="imageURL"
                                    placeholder="Enter member name"
                                    value={imageURL}
                                    onChange={e => setImageURL(e.target.value)}
                                    disabled
                                />
                                <Label for="imageURL">
                                    Image URL
                                </Label>
                            </FormGroup>
                            <FormGroup floating>
                                <Input
                                    id="title"
                                    placeholder="Enter member name"
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                    required
                                />
                                <Label for="title">
                                    Member Name
                                </Label>
                            </FormGroup>
                            <FormGroup floating>
                                <Input
                                    id="text"
                                    placeholder="Enter text"
                                    value={text}
                                    onChange={e => setText(e.target.value)}
                                />
                                <Label for="text">
                                    Text
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

export default EditMemberImageSliderModal