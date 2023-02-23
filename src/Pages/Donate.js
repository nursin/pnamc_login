import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import ProductCard from '../components/ProductCard'

function Donate() {
  return (
    <Container className='news'>
      <Row>
        <Col>
          <h2 className='text-center text-black my-3'>Donate</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className='text-center text-black my-3'>Heal our nurses with your heart-felt donation</p>
        </Col>
      </Row>
      <Row className='mx-auto d-flex justify-content-center'>
        <ProductCard donationType="supporter" donationPrice="100" donationImage=" " />
        <ProductCard donationType="champion" donationPrice="200" donationImage=" " />
        <ProductCard donationType="advocate" donationPrice="300" donationImage=" " />
        <ProductCard donationType="Custom" donationPrice="100" donationImage=" " />
      </Row>
    </Container>
  )
}

export default Donate