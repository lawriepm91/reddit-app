import React from 'react';
import { Col } from 'react-bootstrap';

export default function Tile({ id }) {
  return (
    <Col sm={12} md={6} lg={4} key={id}>
    </Col>
  );
}
