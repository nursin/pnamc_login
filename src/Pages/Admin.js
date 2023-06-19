import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import FilterTable from '../components/FilterTable'
import Tablet from '../components/Tablet'

function Admin() {
    const transactions = [
        {
            id: 1,
            stripe_tx_id: "pi_3N3M0fHU908PN1EP1i7XjXIn",
            display_name: "bobby keel",
            product_type: "membership",
            product_name: "regular member 2 year - $170",
            created: 1683044701,
            total_paid: 120.1
        },
        {
            id: 2,
            stripe_tx_id: "pi_3N3M0fHU908PN1EP1i7XjXIn",
            display_name: "penelope forester",
            product_type: "membership",
            product_name: "regular member 1 year - $170",
            created: 1687137163,
            total_paid: 130.1
        },
        {
            id: 3,
            stripe_tx_id: "pi_3N3M0fHU908PN1EP1i7XjXIn",
            display_name: "amy jerry",
            product_type: "event",
            product_name: "met gala",
            created: 1700374352,
            total_paid: 89.1
        },
        {
            id: 4,
            stripe_tx_id: "pi_3N3M0fHU908PN1EP1i7XjXIn",
            display_name: "jerry porter",
            product_type: "membership",
            product_name: "regular member 2 year - $170",
            created: 1683044701,
            total_paid: 65.1
        },
        {
            id: 1,
            stripe_tx_id: "pi_3N3M0fHU908PN1EP1i7XjXIn",
            display_name: "bobby keel",
            product_type: "membership",
            product_name: "regular member 2 year - $170",
            created: 1683044701,
            total_paid: 120.1
        },
        {
            id: 2,
            stripe_tx_id: "pi_3N3M0fHU908PN1EP1i7XjXIn",
            display_name: "penelope forester",
            product_type: "membership",
            product_name: "regular member 1 year - $170",
            created: 1687137163,
            total_paid: 130.1
        },
        {
            id: 3,
            stripe_tx_id: "pi_3N3M0fHU908PN1EP1i7XjXIn",
            display_name: "amy jerry",
            product_type: "event",
            product_name: "met gala",
            created: 1700374352,
            total_paid: 89.1
        },
        {
            id: 4,
            stripe_tx_id: "pi_3N3M0fHU908PN1EP1i7XjXIn",
            display_name: "jerry porter",
            product_type: "membership",
            product_name: "regular member 2 year - $170",
            created: 1683044701,
            total_paid: 65.1
        },
        {
            id: 1,
            stripe_tx_id: "pi_3N3M0fHU908PN1EP1i7XjXIn",
            display_name: "bobby keel",
            product_type: "membership",
            product_name: "regular member 2 year - $170",
            created: 1683044701,
            total_paid: 120.1
        },
        {
            id: 2,
            stripe_tx_id: "pi_3N3M0fHU908PN1EP1i7XjXIn",
            display_name: "penelope forester",
            product_type: "membership",
            product_name: "regular member 1 year - $170",
            created: 1687137163,
            total_paid: 130.1
        },
        {
            id: 3,
            stripe_tx_id: "pi_3N3M0fHU908PN1EP1i7XjXIn",
            display_name: "amy jerry",
            product_type: "event",
            product_name: "met gala",
            created: 1700374352,
            total_paid: 89.1
        },
        {
            id: 4,
            stripe_tx_id: "pi_3N3M0fHU908PN1EP1i7XjXIn",
            display_name: "jerry porter",
            product_type: "membership",
            product_name: "regular member 2 year - $170",
            created: 1683044701,
            total_paid: 65.1
        }
    ]
    const members = [
        {
            display_name: "bobby keel",
            email: "bobbykeel76@gmail.com",
            membership: "regular member 2 year - $170",
            membership_exp: "Jun 16, 2023",
            created: 1683044701
        },
        {
            display_name: "judy presly",
            email: "judypresly76@gmail.com",
            membership: "regular member 2 year - $170",
            membership_exp: "Apr 12, 2013",
            created: 1683044701
        },
        {
            display_name: "randle candle",
            email: "randomcandle@gmail.com",
            membership: "regular member 2 year - $170",
            membership_exp: "May 6, 2021",
            created: 1683044701
        },
        {
            display_name: "bandy kertz",
            email: "bandykertz@gmail.com",
            membership: "regular member 2 year - $170",
            membership_exp: "May 16, 2023",
            created: 1683044701
        },
        {
            display_name: "john tandon",
            email: "johntandon76@gmail.com",
            membership: "regular member 2 year - $170",
            membership_exp: "May 26, 2023",
            created: 1683044701
        },
    ]
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
            <Row className='d-flex justify-content-between mx-0 mt-2'>
                <Tablet title="Total Sales $" subtitle="$134,000" />
                <Tablet title="Total Sales #" subtitle="134" />
                <Tablet title="Membership Sales" subtitle="$19,400" />
                <Tablet title="Merchant Cost" subtitle="$400" color="red" />
            </Row>
            <Row className='d-flex justify-content-between mx-0 my-md-2'>
                <Tablet title="Event Sales" subtitle="$13,400" />
                <Tablet title="Donation Sales" subtitle="$7,000" />
                <Tablet title="Event Cost" subtitle="$4,000" color="red"/>
                <Tablet title="Processing Fee" subtitle="$500" />
            </Row>
            <Row className='d-flex justify-content-between mx-0 mb-2'>
                <Tablet title="Total Members" subtitle="130" />
                <Tablet title="Unpaid Members" subtitle="13" color="red"/>
                <Tablet title="Membership Types" subtitle="$134,000" />
                <Tablet title="Visitor Stats" subtitle="$134,000" />
            </Row>
            <Row className='mb-3'>
                <Col>
                    <FilterTable data={transactions} tableTitle="Transactions" />
                </Col>
            </Row>
            <Row className='mb-3'>
                <Col>
                    <FilterTable data={members} tableTitle="Members" />
                </Col>
            </Row>
            <Row className='mb-3'>
                <Col>
                    <FilterTable data={events} tableTitle="Events" />
                </Col>
            </Row>
        </Container>
    )
}

export default Admin