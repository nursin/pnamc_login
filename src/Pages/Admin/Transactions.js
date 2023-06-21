import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { db } from '../../firebase';
import FilterTable from '../../components/FilterTable'

function Transactions() {
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
        <Container>
            <Row className='my-3'>
                <Col>
                    <FilterTable data={transactions} tableTitle="Transactions" />
                </Col>
            </Row>
        </Container>
    )
}

export default Transactions