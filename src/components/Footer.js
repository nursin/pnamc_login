import React from 'react'
import { Container, Col, Row } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer>
            <Container className='pt-3 text-center'>
                <Row className='footer__linkText'>
                    <p className=''>Affiliations</p>
                    <Col xs={6} md={2} className='ms-md-auto'>
                        <a className='' href='https://www.pnanj.org'>PNANJ</a><br />
                        <a className='' href='https://www.mypnaa.org'>PNAA</a><br />
                        <a className='' href='https://www.mypnaafoundation.org'>PNAAF</a><br />
                        <a className='' href='https://www.state.nj.us/lps/ca/medical.htm'>NJBON</a><br />
                    </Col>
                    <Col xs={6} md={2} className='me-md-auto'>
                        <a className='' href='https://www.nursingworld.org'>ANA</a><br />
                        <a className='' href='https://www.nln.org'>NLN</a><br />
                        <a className='' href='https://www.njsna.org'>NJSNA</a><br />
                        <a className='' href='https://www.ncemna.org'>NCEMNA</a><br />
                    </Col>
                </Row>
                <hr className='text-white' />
                <Row>
                    <Col>
                        <div className='ps-3'>
                            <a href="https://www.facebook.com/groups/55794387897/" aria-label="Facebook" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} className="facebook fa-2x fa-fw mb-2" /></a>
                            {/* <a href="https://twitter.com/" aria-label="Twitter" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} className="twitter fa-2x fa-fw mb-2" /></a>
                            <a href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className="instagram fa-2x fa-fw mb-2" /></a> */}
                            <a href="https://www.youtube.com/channel/UCj-1ZiVCMiGggP4rTEW-J3w" aria-label="Youtube" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube} className="youtube fa-2x fa-fw mb-2" /></a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Copyright © 2023 PNAMC. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer