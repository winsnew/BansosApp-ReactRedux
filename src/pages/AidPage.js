// AidPage.js
import React, { useState } from 'react';
import AidForm from '../components/AidForm';
import AidList from '../components/AidList';
import Statistics from '../components/Statistics';
import { Container, Row, Col, Button } from 'react-bootstrap';

function AidPage() {
    const [aids, setAids] = useState([]);

    const addAid = (aid) => {
        setAids([...aids, aid]);
    };

    return (
        <Container className="mt-5">
            <Row className="mb-4">
                <Col>
                    <div className="d-flex justify-content-between align-items-center">
                        <h1>Data Bantuan Bencana</h1>
                        <AidForm addAid={addAid} />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                    <AidList aids={aids} />
                </Col>
                <Col md={4}>
                    <Statistics aids={aids} />
                </Col>
            </Row>
        </Container>
    );
}

export default AidPage;
