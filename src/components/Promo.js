import React from 'react'
import { Container, Col, Row, Button, NavLink } from 'reactstrap';
import YouTube from 'react-youtube';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function Promo({ title, text, image, video, slideShowImages, buttonTitle, buttonLink, order }) {
    const opts = {
        playerVars: {
            autoplay: 0,
        },
    };
    const buttonStyle = {
        width: "40px",
        background: 'none',
        border: "0",
        margin: '10px'
    };
    
    const properties = {
        prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-chevron-left" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
      </svg></button>,
        nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-chevron-right" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
      </svg></button>
    }

    return (
        <div>
            <Container className='text-center mb-5'>
                <Row>
                    <Col md={6} className={'mb-5 mb-lg-0' + (order ? '' : ' order-lg-2')}>
                        {image ?
                            <img src={image} className='promo__image' alt='' /> : ""}
                        {video ?
                            <div className='promo__video'>
                                <YouTube videoId={video} opts={opts} />
                            </div>
                            : ""}
                        {slideShowImages ?
                            <Zoom {...properties} scale={0.9} indicators={false}>
                                {slideShowImages.map((each, index) => (
                                    <div key={index} style={{ width: "100%" }}>
                                        <img className='slideShow__images round' alt="Slide Image" src={each} />
                                    </div>
                                ))}
                            </Zoom> : ""}
                    </Col>
                    <Col md={6} className={'align-self-center ' + (order ? '' : 'order-lg-1')}>
                        <h1 className='text-black'>{title}</h1>
                        <p className='text-black fs-3'>{text}</p>
                        {buttonTitle ?
                            <Button href={buttonLink} className='membership__formButton fs-4'>{buttonTitle}</Button> : ""}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Promo