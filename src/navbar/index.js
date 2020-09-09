import React from 'react';
import { Navbar as Nav } from 'react-bootstrap';

export default function Navbar() {
  return (
    <Nav bg="white" className="mb-3">
      <Nav.Brand href="/">Reddit</Nav.Brand>
    </Nav>
  );
}
