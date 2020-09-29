import React from 'react';
import UserLocation from "../UserLocation";
import Diffcultylevel from "../Diffcultylevel";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function index() {
    return (
        <div className="selectPath">
            <Container>
                <Row>
                    <Col sm={12} md={6}><UserLocation /></Col>
                    <Col sm={12} md={6}><Diffcultylevel /></Col>
                    <Col sm={12}><Button>Let's Go!</Button></Col>
                </Row>
            </Container>



        </div>
    )
}
