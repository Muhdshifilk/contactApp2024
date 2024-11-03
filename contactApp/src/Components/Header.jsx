import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';

function Header() {
  return (
    <>
      <Navbar className="bg-primary container-fluid">
        <Container>
          <Navbar.Brand href="#home">
          <h1>
              <Badge className="bg-info border border-light">
              <i className="fa-solid fa-id-badge fa-lg fa-fade" style={{color: "yellow",}} />
              {' '}
            Do Contact</Badge>
          </h1></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
