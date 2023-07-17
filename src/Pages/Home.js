import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Contact from '../components/Contact'
import ImageSlider from '../components/ImageSlider'
import MyCarousel from '../components/MyCarousel'
import Promo from '../components/Promo'
import { db } from '../firebase'


const medicalMissionText = "Help provide a healing touch to those in need by joining us on our medical missions around the world. Most recent mission in Naga Cebu."
const medicalMissionSlideShowImages = ["https://drive.google.com/uc?export=view&id=1xXl-YYqdJlkoKrslneNWgSo0GBc6iCqv", "https://drive.google.com/uc?export=view&id=1kqQFc_QYrBW-FUugITzeETDDLg9FUKFr", "https://drive.google.com/uc?export=view&id=1ioDJoN23dUKo6BPA9vn5BDE84t57zEst", "https://drive.google.com/uc?export=view&id=17JubV7MfzUjhKRiREBqRZ59_6ZPb2VM8", "https://drive.google.com/uc?export=view&id=1UABmnDFHk9Muy0tglPFB4DC9MGO6R3Dj", "https://drive.google.com/uc?export=view&id=1vyjBv8pUOUv8SrnZXw7V3Mbgzo5jWB72", "https://drive.google.com/uc?export=view&id=1tgqZAdAl3OWUV8ZpN1MpEBi4z26kfS7Q", "https://drive.google.com/uc?export=view&id=1_nOse-BsQm-hJt-YpdXJVWb3gSJXE3tF", "https://drive.google.com/uc?export=view&id=1SnBmIn3e0sfo3N1a4NadyS3t5croW4N9", "https://drive.google.com/uc?export=view&id=1JBYWdH8-dhatSG17n2Hlh1Bqkk3Qk1Rc", "https://drive.google.com/uc?export=view&id=1tfS0jxzF2nMSoRRlhifVwsFN1I0oG8Cp", "https://drive.google.com/uc?export=view&id=1rN3Boo-og80QEMB89CVRYp8DIaZQZGZA", "https://drive.google.com/uc?export=view&id=1hP__E9xxrmf1cnKY8NSWMFszlWmBoS75"]



function Home() {
    // redux shit
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [userInfo, setUserInfo] = useState('');
    const [sections, setSections] = useState([]);
    const [carousel, setCarousel] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) return;
        db
            .collection('users')
            .where('auth_uid', '==', `${user?.uid}`)
            .onSnapshot(snapshot => {
                setUserInfo(snapshot.docs.map(doc => ({
                    id: doc.id,
                    user: doc.data()
                })));
            })
    }, [user]);

    useEffect(() => {
        db
            .collection("sections")
            .onSnapshot(snapshot => {
                setSections(snapshot.docs.map(doc => ({
                    id: doc.id,
                    section: doc.data()
                })));
            })

        db
            .collection("carousel")
            .onSnapshot(snapshot => {
                setCarousel(snapshot.docs.map(doc => ({
                    id: doc.id,
                    carousel: doc.data()
                })));
            })

    }, []);

    const aboutUs = Object.values(sections).filter(section => section.id === "SV1YIpWO0rqA953WAe24")[0]?.section
    const presidentMessageIntro = Object.values(sections).filter(section => section.id === "vlkimbQWOcGIKxb3ORcC")[0]?.section
    const eventGala = Object.values(sections).filter(section => section.id === "LNNesrz44x9fNSeGecA8")[0]?.section
    const medicalMission = Object.values(sections).filter(section => section.id === "efy600lOeTljXOpso6X3")[0]?.section

    return (
        <div className='home'>
            <MyCarousel carouselItems={carousel}/>
            <Promo title={aboutUs?.header} text={aboutUs?.text} image={aboutUs?.image} order={true} />
            <Promo title={presidentMessageIntro?.header} text={presidentMessageIntro?.text} image={presidentMessageIntro?.image} buttonTitle="Read more" buttonLink='/presidents-message' order={false} />
            <Promo title={eventGala?.header} text={eventGala?.text} video={eventGala?.video_id} order={true} />
            <Promo title={medicalMission?.header} text={medicalMission?.text} slideShowImages={medicalMission?.image_array} buttonTitle="Read more" buttonLink='https://drive.google.com/drive/folders/1EqqNFPWd-uh2KXM0e7EGAVONI59Pc737?usp=share_link' order={false} />
            <ImageSlider />
            <Contact />
        </div>
    )
}

export default Home