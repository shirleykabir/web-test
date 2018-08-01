import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Col, Row, NavItem, Nav } from 'react-bootstrap';
import './Navigation.css'

const Navigation = (
  <div className="Navigation">
<Navbar>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Index
      </NavItem>
      <NavItem eventKey={2} href="#team">
        The Team
      </NavItem>
      <NavItem eventKey={3} href="#aircraft">
        Aircraft
      </NavItem>
      <NavItem eventKey={4} href="#recruitment">
        Recruitment
      </NavItem>
      <NavItem eventKey={5} href="#sponsors">
        Sponsors
      </NavItem>
      <NavItem eventKey={6} href="#contactus">
        Contact Us
      </NavItem>
    </Nav>
</Navbar>
</div>
)

export default Navigation;