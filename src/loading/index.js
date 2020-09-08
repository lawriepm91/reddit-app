import React from 'react';
import { Col } from 'react-bootstrap';
import './index.scss';

export default function LoadingTile() {
  return (
    <Col
      sm={12}
      md={{ span: 6, offset: 3 }}
      className="loading p-3"
    >
      <div className="loading-text--secondary animated-loading mb-1" />
      <div className="loading-text--primary animated-loading mb-2" />
      <div className="loading-img animated-loading" />
    </Col>
  );
}
