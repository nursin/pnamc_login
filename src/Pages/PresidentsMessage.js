import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const griely = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/griely_persia.jpg?alt=media&token=029674f0-05cb-4d29-9f85-da2c72068092";

function PresidentsMessage() {
  return (
    <Container>
      <Row>
        <h1 className='text-center text-black mt-3'>Presidents Message</h1>
      </Row>
      <Row className='mt-3'>
        <Col lg={1}>
        </Col>
        <Col lg={2}>
          <div className='text-center mt-4 ms-md-4'>
            <img className='contact__presidentImage mb-2' src={griely} />
            <p className='text-black pb-2'>Griely Persia MSN, RN<br />PNAMC President<br />2022-2024</p>
          </div>
        </Col>
        <Col lg={7}>
          <p className='text-black ms-3'>January 09, 2023,</p>
          <p className='text-black ms-3'>
            I am honored to take the role of the President of the Philippine Nurses Association - Maryland Chapter and I am proud to be a part of this organization that consistently upholds its vision, mission, and values. The pandemic has taken its toll on all of us emotionally, mentally, financially, and spiritually. The heartfelt care we give evokes an important element in our healing process as we continue to strive, to remain resilient, and to stay optimistic. Over the last 3 years, I have witnessed the hard work and dedication of our organization in making sure that our front liners feel appreciated for their heroism and selfless devotion to the nursing profession and to the community. We continued to provide meaningful and exciting activities to recharge our nurses, because we believe that by taking care of ourselves, we can take better care of others.
          </p>
        </Col>
      </Row>
      <Row className='ms-lg-3 mb-3 mx-auto'>
        <Col lg={1}>
        </Col>
        <Col lg={9}>
          <p className='text-black'>
            I have taken some time to reflect on what we have accomplished. The pandemic did not stop us from reaching our goals. We continued to embrace our commitment to serve and make a difference in the lives of many. Despite all the challenges, we were able to find strategic and creative ways to deliver the care and services to the community. All our efforts were not left unnoticed. We received various awards at the National level in recognition of our dedication, teamwork, and contribution to the healthcare field and to the community we serve. I am proud to say that we have not only met but have exceeded our goals and expectations.
          </p>
          <p className='text-black'>
            There are important matters that we will be focusing on during this term. We will develop and implement strategies to increase membership, collaborate with other local institutions and organizations, provide innovative information and resources to our nurses and the community, commit in promoting unity and engagement, and strengthen our bond as an organization.
          </p>
          <p className='text-black'>
            MOVE is my mantra, which stands for Motivation, Open-mindedness, Vision, and Empowerment. This allows us to achieve a common goal, foster creativity, mobilize the team to work towards our vision, increase accountability, and encourage autonomy.
          </p>
          <p className='text-black'>
            Despite all the challenges, I am grateful to serve as the President of this organization. An organization full of talented, energetic, smart, and highly committed officers and members, all of whom I sincerely respect, admire, and consider my family.
          </p>
          <p className='text-black'>
            This is not my journey alone, I sincerely need your commitment in all the challenges and endeavors that we will be undertaking. Life has so much uncertainties, but together we remain strong and resilient as nurses, and as Filipinos.
          </p>
          <p className='text-black'>
            Let’s continue to MOVE together and bring value, success, unity, and pride to the Philippine Nurses Organization of Maryland! God Bless us All!
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default PresidentsMessage