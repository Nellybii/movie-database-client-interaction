import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar className="bg-body-tertiary" style={{backgroundColor:'blue-200', padding:"4px"}} >
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>Home</Navbar.Brand>
        <Navbar.Brand as={Link} to="/addmovie" style={{ paddingLeft: '1rem', paddingRight: '1rem' }} >AddMovie</Navbar.Brand>
        
      </Container>
    </Navbar>
  );
}

export default NavBar;
