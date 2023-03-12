import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Contact from '../components/Contact'
import MyCarousel from '../components/MyCarousel'
import Promo from '../components/Promo'
import { db } from '../firebase'


const aboutusTitle = "About Us"
const aboutusText = "PNAMC is a professional organization that will uphold the positive image and foster the welfare of Philippine descent nurses and  its members while promoting professional excellence, innovative, leadership, and contribution to significant outcomes to Maryland’s healthcare and society."
const aboutusImage = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/about_us_new_1000_600.jpeg?alt=media&token=3cf49ce5-279a-417b-8f9b-69a6de7855ec"

const eventGalaTitle = "2021 PNAMC Gala Party"
const eventGalaText = "Induction of the officers, and Gala night. It is also for medical mission introduction, and others activities that needs to be endorsed."

const presidentMessageIntroTitle = "Presidents Message"
const presidentMessageIntroText = "I am honored to take the role of the President of the Philippine Nurses Association - Maryland Chapter and I am proud to be a part of this organization that consistently upholds its vision, mission, and values."
const presidentMessageIntroImage = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/griely_persia.jpg?alt=media&token=029674f0-05cb-4d29-9f85-da2c72068092"

const medicalMissionTitle = "Medical Mission 2023"
const medicalMissionText = "Help provide a healing touch to those in need by joining us on our medical missions around the world. Most recent mission in Naga Cebu."
const medicalMissionSlideShowImages = ["https://drive.google.com/uc?export=view&id=1xXl-YYqdJlkoKrslneNWgSo0GBc6iCqv", "https://drive.google.com/uc?export=view&id=1kqQFc_QYrBW-FUugITzeETDDLg9FUKFr", "https://drive.google.com/uc?export=view&id=1ioDJoN23dUKo6BPA9vn5BDE84t57zEst", "https://drive.google.com/uc?export=view&id=17JubV7MfzUjhKRiREBqRZ59_6ZPb2VM8", "https://drive.google.com/uc?export=view&id=1UABmnDFHk9Muy0tglPFB4DC9MGO6R3Dj", "https://drive.google.com/uc?export=view&id=1vyjBv8pUOUv8SrnZXw7V3Mbgzo5jWB72", "https://drive.google.com/uc?export=view&id=1tgqZAdAl3OWUV8ZpN1MpEBi4z26kfS7Q", "https://drive.google.com/uc?export=view&id=1_nOse-BsQm-hJt-YpdXJVWb3gSJXE3tF", "https://drive.google.com/uc?export=view&id=1SnBmIn3e0sfo3N1a4NadyS3t5croW4N9", "https://drive.google.com/uc?export=view&id=1JBYWdH8-dhatSG17n2Hlh1Bqkk3Qk1Rc", "https://drive.google.com/uc?export=view&id=1tfS0jxzF2nMSoRRlhifVwsFN1I0oG8Cp", "https://drive.google.com/uc?export=view&id=1rN3Boo-og80QEMB89CVRYp8DIaZQZGZA", "https://drive.google.com/uc?export=view&id=1hP__E9xxrmf1cnKY8NSWMFszlWmBoS75"]



function Home() {
    // redux shit
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [userInfo, setUserInfo] = useState('');
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
        if (userInfo[0]?.user.has_app_on_file === false) {
            console.log("User", userInfo[0]?.user)
            navigate('/create-account')
        } else if (userInfo[0]?.user.has_paid_membership === false) {
            console.log("User", userInfo[0]?.user)
            navigate('/membership-payment')
        } else {
            console.log("none")
            console.log("User", userInfo[0]?.user.has_app_on_file)
        }
    }, [userInfo])


    return (
        <div className='home'>
            <MyCarousel />
            <Promo title={aboutusTitle} text={aboutusText} image={aboutusImage} order={true} />
            <hr className='mx-5 my-5' />
            <Promo title={presidentMessageIntroTitle} text={presidentMessageIntroText} image={presidentMessageIntroImage} buttonTitle="Read more" buttonLink='/presidents-message' order={false} />
            <hr className='mx-5 my-5' />
            <Promo title={eventGalaTitle} text={eventGalaText} video={"dalOhI18JJU"} order={true} />
            <hr className='mx-5 my-5' />
            <Promo title={medicalMissionTitle} text={medicalMissionText} slideShowImages={medicalMissionSlideShowImages} buttonTitle="Read more" buttonLink='https://drive.google.com/drive/folders/1EqqNFPWd-uh2KXM0e7EGAVONI59Pc737?usp=share_link' order={false} />
            <Contact />
        </div>
    )
}

export default Home