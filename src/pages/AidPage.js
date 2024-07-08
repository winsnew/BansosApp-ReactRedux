// AidPage.js
import React, { useState } from 'react';
import {connect} from 'react-redux';
import AidForm from '../components/AidForm';
import { addAid } from '../redux/aidAction';
import AidList from '../components/AidList';
import Statistics from '../components/Statistics';
import { Container, Row, Col, Button } from 'react-bootstrap';

function AidPage({aids,addAid}) {
    const handleAddAid = (aid) => {
        addAid(aid)
    }
    return (
        <Container className="mt-5">
            <Row className="mb-4">
                <Col>
                    <div className="d-flex justify-content-between align-items-center">
                        <h1>Data Bantuan Bencana</h1>
                        <AidForm addAid={handleAddAid} />
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

const mapStateToProps = (state) => ({
    aids: state.bansos.aidData,
})

const mapDispatchToProps = {
    addAid,
}

export default connect(mapStateToProps, mapDispatchToProps)(AidPage);
