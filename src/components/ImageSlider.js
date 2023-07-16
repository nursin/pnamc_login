import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap';
import { db, storage } from '../firebase'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase';
import ModifyModal from './ModifyModal';
import EditImageSliderModal from './EditImageSliderModal';
import EditMemberImageSliderModal from './EditMemberImageSliderModal';
import DeleteMemberModal from './DeleteMemberModal';


function ImageSlider() {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [sectionHeader, setSectionHeader] = useState('');

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

        db
            .collection("sections")
            .doc('GJzhEiT4Vocr5UxfHaQh')
            .onSnapshot((doc) => {
                setSectionHeader(doc.data().header)
            })
    }, []);

    return (
        <div className='imageSlider__container pt-4'>

            <h1 className='text-black text-center'><EditImageSliderModal sectionHeader={sectionHeader} />{sectionHeader}</h1>
            <div className='imageSlider mt-2'>
                <div>
                    <ModifyModal />
                </div>
                {newMembers.map(({ id, newMember: { title, text, image, image_alt_text } }) => (
                    <Card key={id} className='imageSlider__card position-relative'>
                        <DeleteMemberModal id={id} />
                        <EditMemberImageSliderModal id={id} title={title} image={image} text={text} />
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