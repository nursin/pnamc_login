import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import FilterTable from '../../components/FilterTable'
import Tablet from '../../components/Tablet'
import { db } from '../../firebase';

function Dashboard() {
    const [transactions, setTransactions] = useState();

    useEffect(() => {
        db
            .collection('users-transactions')
            .orderBy('created', 'desc')
            .onSnapshot(snapshot => {
                setTransactions(snapshot.docs.map(doc => ({
                    id: doc.id,
                    transaction: doc.data()
                })));
            })
    }, [])

    return (
        <Container className='admin'>
            <Row className='d-flex justify-content-between mx-0 mt-3'>
                <Tablet title="Total Sales $" subtitle="$134,000" />
                <Tablet title="Total Sales #" subtitle="134" />
                <Tablet title="Membership Sales" subtitle="$19,400" />
                <Tablet title="Merchant Cost" subtitle="$400" color="red" />
            </Row>
            <Row className='d-flex justify-content-between mx-0 my-md-2'>
                <Tablet title="Event Sales" subtitle="$13,400" />
                <Tablet title="Donation Sales" subtitle="$7,000" />
                <Tablet title="Event Cost" subtitle="$4,000" color="red" />
                <Tablet title="Processing Fee" subtitle="$500" />
            </Row>
            <Row className='d-flex justify-content-between mx-0 mb-2'>
                <Tablet title="Total Members" subtitle="130" />
                <Tablet title="Unpaid Members" subtitle="13" color="red" />
                <Tablet title="Membership Types" subtitle="34 RM2YR" />
                <Tablet title="Visit Stats" subtitle="120" />
            </Row>
            <Row className='my-3'>
                <Col>
                    <FilterTable data={transactions} tableTitle="Transactions" />
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard