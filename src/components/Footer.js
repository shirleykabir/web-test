import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

const Footer = (
        <Grid fluid={true}>
            <Row className="show-grid">
                <Col xs={6} md={4}>
                <h5>We Are</h5><br/>
                Sed molestie nunc est, ut porttitor purus fringilla aliquet. Ut tempor convallis felis, vel faucibus nibh consequat in.<br/>
                <code>&copy; 2018 CUAir. All Rights Reserved.</code>
                </Col>
                <Col xs={6} md={4}>
                <h5>Site Map</h5><br/>
                </Col>
                <Col xsHidden md={4}>
                <h5>Follow Us</h5><br/>
                </Col>
            </Row>
        </Grid>
)
export default Footer;