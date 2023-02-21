import React from 'react'
import { Container, Col, Row } from 'reactstrap';

const griely = "https://firebasestorage.googleapis.com/v0/b/pnamc-eb0c4.appspot.com/o/griely_persia.jpg?alt=media&token=029674f0-05cb-4d29-9f85-da2c72068092"

function Contact() {
    return (
        <div>
            <Container fluid className='text-center bg-primary pb-5'>
                <Row>
                    <Col>
                        <h1 className='mt-3 pb-5'>Contact Us</h1>
                        <div className='d-flex-inline justify-content-center align-items-center'>
                            <div className='contact__presidentCard round mx-auto'>
                                <img className='contact__presidentImage my-3' src={griely} />
                                <p className='text-black pb-3'>Griely Persia MSN, BSN, RN<br />President<br />2022-2024</p>
                            </div>
                            <a className='ms-3' href='https://forms.gle/22KGmqZUD6B1Zrrj8' target="_blank" rel="noreferrer">Submit Feedback</a><br />
                            <a className='ms-3' href='mailto:Grielypersia125@gmail.com' target="_blank" rel="noreferrer">Send Email</a>
                        </div>
                    </Col>
                    <Col>
                        <h1 className='mt-3'>Newsletter</h1>
                        <iframe className='contact__newsletter round' src="https://dbcd70f6.sibforms.com/serve/MUIEAOG5g3tJLUL1LsK2BzAkRlH5UygHqFUqVDdB-tIx8CNS31R0vVHBW4oYvsvLlu_xCOEmwEJ02MnNUyvRTq1VNfgg0vNY7ae2CpqCnWXTMYITIlq8sJ2ecD6Nrcams5R5V2jspVAZ7-Fckw2iPxvbLSWj545KEpEA-VweZdl5fLqQTzAoVE1o-tO3WzY36RzDziZbBP-dYvvj"></iframe>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact