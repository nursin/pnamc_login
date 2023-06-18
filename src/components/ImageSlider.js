import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap';
import { db } from '../firebase'

function ImageSlider() {
    const [newMembers, setNewMembers] = useState([]);

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

    console.log("memberList", newMembers)

    return (
        <div className='imageSlider__container pt-4'>
            <h1 className='text-black text-center'>Welcome New Members</h1>
            <div className='imageSlider mt-2'>
            {newMembers.map(({newMember : {title, text, image, image_alt_text}}) => (
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