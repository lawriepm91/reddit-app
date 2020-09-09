import React from 'react';
import { Col } from 'react-bootstrap';

export default function Error() {
  return (
    <Col
      xs={12}
      className="d-flex flex-column justify-content-center vh-100"
    >
      <h1 className="text-center">Ooops!</h1>
      <h4 className="text-center">We encountered an error processing your request</h4>
    </Col>
  );
}
