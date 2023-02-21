import React from 'react'
import { Col, Container, Row } from 'reactstrap'

function RecognitionsAwards() {
  return (
    <Container className='news'>
      <Row>
        <Col>
          <h2 className='text-center text-black my-3'>Recognitions & Awards</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className='text-center text-black my-3'>No Awards Posted. Check Back soon.</p>
        </Col>
      </Row>
    </Container>
  )
}

export default RecognitionsAwards