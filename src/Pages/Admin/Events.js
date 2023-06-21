import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import FilterTable from '../../components/FilterTable'

function Events() {

  const events = [
    {
      event_name: "met gala",
      location: "CCBX Essex",
      price: 100.0,
      total_num: 12,
      total_sales: 1200,
      created: 1683044701,
      event_date: 27850643011,
      expired: false,
    },
    {
      event_name: "honey gala",
      location: "Checkers Essex",
      price: 120.0,
      total_num: 15,
      total_sales: 1900,
      created: 1643044701,
      event_date: 27450643011,
      expired: true,
    },
    {
      event_name: "carry gala",
      location: "CCBX Essex",
      price: 100.0,
      total_num: 12,
      total_sales: 1200,
      created: 1683044701,
      event_date: 27850643011,
      expired: false,
    },
    {
      event_name: "jimmy gala",
      location: "Chillis Essex",
      price: 100.0,
      total_num: 12,
      total_sales: 1200,
      created: 1683044701,
      event_date: 27850643011,
      expired: false,
    },
    {
      event_name: "met gala",
      location: "CCBX Essex",
      price: 100.0,
      total_num: 12,
      total_sales: 1200,
      created: 1683044701,
      event_date: 27850643011,
      expired: false,
    },
  ]

  return (
    <Container className='admin'>
      <Row className='mt-3'>
        <Col>
          <FilterTable data={events} tableTitle="Events" />
        </Col>
      </Row>
    </Container>
  )
}

export default Events