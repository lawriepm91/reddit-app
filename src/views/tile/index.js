import React from 'react';
import moment from 'moment';
import { Col, Image } from 'react-bootstrap';
import './index.scss';

export default function Tile(props) {
  const { url, author, title, created_utc: createdDate, ups, downs, num_comments: noOfComment } = props;
  const createdAt = moment(createdDate * 1000).fromNow();
  return (
    <Col sm={12} md={{ span: 6, offset: 3 }} className="tile">
      <p>Posted by u/{author} {createdAt}</p>
      <h4>{title}</h4>
      <div>
        <Image src={url} />
      </div>
    </Col>
  );
}
