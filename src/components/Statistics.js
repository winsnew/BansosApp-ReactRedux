import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

function Statistics({ aids }) {
    const totalAids = aids.length;
    const totalAmount = aids.reduce((sum, aid) => sum + parseFloat(aid.amount), 0);
    const averageAmount = totalAids > 0 ? (totalAmount / totalAids).toFixed(2) : 0;

    return (
        <Row className="mt-5">
            <Col md={4}>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>Total</Card.Title>
                        <Card.Text>{totalAids}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>Total Amount</Card.Title>
                        <Card.Text>{totalAmount}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>Average Amount</Card.Title>
                        <Card.Text>{averageAmount}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default Statistics;
