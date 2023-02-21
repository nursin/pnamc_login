import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';

const pnamcByLaws = "https://drive.google.com/file/d/1RzVW8PUco90siRKYDu_XjF-K3BK_yOij/preview"

function Bylaws() {
  return (
    <Container className='text-center'>
      <Row>
        <Col md={12}>
          <h1 className='text-black my-3'>Bylaws</h1>
          <iframe className='pdf-viewer' src="https://drive.google.com/file/d/1RzVW8PUco90siRKYDu_XjF-K3BK_yOij/preview"></iframe>
        </Col>
        <Col>
          <h1 className='text-black mb-3'>Policy & Procedure</h1>
          <iframe className='pdf-viewer' src="https://drive.google.com/file/d/1faL47SfqyUQQomsh7y-i-rBlBM-zvwTY/preview"></iframe>
        </Col>
      </Row>
    </Container>
  )
}

export default Bylaws