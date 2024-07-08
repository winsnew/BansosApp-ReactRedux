import React from 'react';
import AidItem from './AidItem';
import { Card, Row, Col } from 'react-bootstrap';

function AidList({ aids }) {
    return (
        <Row xs={1} md={2} className="g-4">
            {aids.map((aid, index) => (
                <Col key={index}>
                    <AidItem aid={aid} />
                </Col>
            ))}
        </Row>
    );
}

export default AidList;
