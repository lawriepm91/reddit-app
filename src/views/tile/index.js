import React from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Image } from 'react-bootstrap';
import { UpVote, DownVote, Comments } from 'icons';
import urls from 'urls';
import './index.scss';

export default function Tile(props) {
  let history = useHistory();
  const { id, url, author, title, created_utc: createdAt, ups, downs, num_comments: noOfComment } = props;
  
  const handleClick = () => {
    history.push(urls.pics.detail(id));
  };

  return (
    <Col
      sm={12} md={{ span: 6, offset: 3 }}
      className="tile cursor-pointer"
      onClick={handleClick}
    >
      <p>Posted by u/{author} {createdAt}</p>
      <h4>{title}</h4>
      <div>
        <Image src={url} />
      </div>
      <div className="d-flex">
        <UpVote value={ups} />
        <DownVote value={downs} />
        <Comments value={noOfComment} />
      </div>
    </Col>
  );
}
