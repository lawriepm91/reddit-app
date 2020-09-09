import React from 'react';
import { Col } from 'react-bootstrap';
import './index.scss';

export default function LoadingTile() {
  return (
    <Col
      xs={12}
      md={{ span: 10, offset: 1 }}
      lg={{ span: 8, offset: 2 }}
      className="loading p-3 rounded mb-3 bg-white"
    >
      <div className="loading-text--secondary animated-loading mb-1" />
      <div className="loading-text--primary animated-loading mb-2" />
      <div className="loading-img animated-loading" />
    </Col>
  );
}
