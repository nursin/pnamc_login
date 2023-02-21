import React from 'react'
import { Col, Container, Row } from 'reactstrap'

function Events() {
  return (
    <Container className='news'>
      <Row>
        <Col>
          <h2 className='text-center text-black my-3'>Events</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className='text-center text-black my-3'>Check calendar below for planned events</p>
          <iframe className='events__calendar' src="https://calendar.google.com/calendar/embed?src=pnamc2%40gmail.com&ctz=America%2FNew_York"></iframe>
        </Col>
      </Row>
    </Container>
  )
}

export default Events