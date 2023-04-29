import React from 'react'
import { Col, Container, FormGroup, Input, Label, Row } from 'reactstrap'
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
        <ProductCard title="supporter" price="100" buttonText="Add to basket" />
        <ProductCard title="champion" price="200" buttonText="Add to basket" />
        <ProductCard title="advocate" price="300" buttonText="Add to basket" />
      </Row>
      <Row>
        <Col>
          <FormGroup floating>
            <Input
              id="donateCustom"
              placeholder="Enter an amount"
              // value={lname}
              // onChange={e => setLname(e.target.value)}
              required
            />
            <Label for="donateCustom">
              Enter an amount
            </Label>
          </FormGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Donate