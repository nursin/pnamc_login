import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap';
import { db, storage } from '../firebase'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase';
import ModifyModal from './ModifyModal';

function ImageSlider() {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [mouseOver, setMouseOver] = useState(false);

    
    const [newMembers, setNewMembers] = useState([]);
    const [imageFile, setImageFile] = useState('');
    const [progress, setProgress] = useState(0);

    const [error, setError] = useState("")
    const [processing, setProcessing] = useState('');
    const [disabled, setDisabled] = useState(true);

    // redux
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        db
            .collection('new-members')
            .orderBy('created', 'desc')
            .limit(30) // limit to prevent overuse of data, also not necessary > 30
            .onSnapshot(snapshot => {
                setNewMembers(snapshot.docs.map(doc => ({
                    id: doc.id,
                    newMember: doc.data()
                })));
            })
    }, []);

    // console.log("memberList", newMembers)

    return (
        <div className='imageSlider__container pt-4'>
            
            <h1 className='text-black text-center'><ModifyModal className='me-3 mb-1 py-1 px-3 round fs-3'>+</ModifyModal>Welcome New Members</h1>
            <div className='imageSlider mt-2'>
                {newMembers.map(({ newMember: { title, text, image, image_alt_text } }) => (
                    <Card className='imageSlider__card'>
                        <img
                            alt={image_alt_text}
                            src={image}
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                {title}
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                {text}
                            </CardSubtitle>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default ImageSlider