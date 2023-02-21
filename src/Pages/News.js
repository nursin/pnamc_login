import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import ItemButton from '../components/ItemButton'

const title = "2020 Vigan Medical Mission";
const image = "https://drive.google.com/uc?export=view&id=1Zyt6uhUr2e88GeIG9pS8nqdnzrwa7nKy";
const dateTime = "2/6/2020 0800am"
const newsLink = "https://drive.google.com/drive/folders/11AoUboXDV-lWrbdQdgZuKWnzBwcPGjqM?usp=sharing";

function News() {
  return (
    <Container className='news'>
      <Row>
        <Col>
          <h1 className='text-center text-black my-3'>News</h1>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="mx-auto">
          {/* <h3 className='text-center text-black mb-3'>2023</h3> */}
          {/* Create new news button */}
          {/* <div className='news__addNewsBtn mx-auto'>
            <svg xmlns="http://www.w3.org/2000/svg" fill='grey' className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
            </svg>
          </div> */}
          <ItemButton title={title} image={image} dateTime={dateTime} newsLink={newsLink}/>
        </Col>
        {/* past news links */}
        {/* <Col md={6} className="text-center">
          <h4 className='text-center text-black mb-3 fs-5'>2022</h4>
          <a className='text-black fs-6' href='' target="_blank" rel="noreferrer">Space Invaders Made the News</a><br />
          <a className='text-black fs-6' href='' target="_blank" rel="noreferrer">Space Invaders Made the News</a><br />
          <a className='text-black fs-6' href='' target="_blank" rel="noreferrer">Space Invaders Made the News</a><br />
          <a className='text-black fs-6' href='' target="_blank" rel="noreferrer">Space Invaders Made the News</a><br />
          <a className='text-black fs-6' href='' target="_blank" rel="noreferrer">Space Invaders Made the News</a><br />
          <a className='text-black fs-6' href='' target="_blank" rel="noreferrer">Space Invaders Made the News</a><br />
          <a className='text-black fs-6' href='' target="_blank" rel="noreferrer">Space Invaders Made the News</a><br />
          <a className='text-black fs-6' href='' target="_blank" rel="noreferrer">Space Invaders Made the News</a><br />
        </Col> */}
      </Row>

    </Container>
  )
}

export default News