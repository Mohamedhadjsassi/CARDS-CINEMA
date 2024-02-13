import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function First() {
    const containerStyle = {
        backgroundColor: 'yellow'
       , 
      }
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{backgroundColor:"yellow"}}>
      <Container style={containerStyle}>
        <Navbar.Brand href="#home">Pathée Cinema</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Calendrier</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">child</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                student
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">adult</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                family package
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default First;