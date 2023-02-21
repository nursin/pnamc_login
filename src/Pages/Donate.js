import React from 'react'
import { Col, Container, Row } from 'reactstrap'

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
          <p className='text-center text-danger my-3'>Available soon</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Donate