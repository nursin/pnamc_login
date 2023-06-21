import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import FilterTable from '../../components/FilterTable'
import { db } from '../../firebase';

function Members() {
    const [members, setMembers] = useState();

    useEffect(() => {
        db
            .collection('users')
            .onSnapshot(snapshot => {
                setMembers(snapshot.docs.map(doc => ({
                    id: doc.id,
                    member: doc.data()
                })));
            })
    }, [])

    return (
        <Container className='admin'>
            <Row className='mt-3'>
                <Col>
                    <FilterTable data={members} tableTitle="Members" />
                </Col>
            </Row>
        </Container>
    )
}

export default Members