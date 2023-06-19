import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import FilterTable from '../components/FilterTable'
import Tablet from '../components/Tablet'

function Admin() {
    return (
        <Container className='admin'>
            <h2 className='text-black text-center my-3 fs-1'>Admin</h2>
            <Row className='d-flex justify-content-between'>
                <Tablet title="Total Sales $" subtitle="$134,000" />
                <Tablet title="Total Members" subtitle="130" />
                <Tablet title="Merchant Cost" subtitle="$400" color="red" />
                <Tablet title="Processing Fee" subtitle="$500" />
            </Row>
            <Row className='d-flex justify-content-between'>
                <Tablet title="Total Sales #" subtitle="134" />
                <Tablet title="Unpaid Members" subtitle="13" />
                <Tablet title="Event Sales" subtitle="$13,400" />
                <Tablet title="Membership Sales" subtitle="$19,400" />
            </Row>
            <Row className='d-flex justify-content-between'>
                <Tablet title="Visitor Stats" subtitle="$134,000" />
                <Tablet title="Donation Sales" subtitle="$7,000" />
                <Tablet title="Event Cost" subtitle="$4,000" />
                <Tablet title="Membership Types" subtitle="$134,000" />
            </Row>
            <Row className='mb-3'>
                <Col>
                    <FilterTable tableTitle="Transactions" />
                </Col>
            </Row>
            <Row className='mb-3'>
                <Col>
                    <FilterTable tableTitle="Members" />
                </Col>
            </Row>
            <Row className='mb-3'>
                <Col>
                    <FilterTable tableTitle="Events" />
                </Col>
            </Row>
        </Container>
    )
}

export default Admin