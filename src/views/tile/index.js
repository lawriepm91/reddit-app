import React from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { UpVote, DownVote, Comments } from 'icons';
import urls from 'urls';
import './index.scss';

export default function Tile({ pic }) {
  const history = useHistory();
  const {
    id,
    url,
    author,
    title,
    created_utc: createdAt,
    ups,
    downs,
    num_comments: noOfComment,
  } = pic;

  const handleClick = () => {
    history.push(urls.pics.detail(id));
  };

  return (
    <Col
      sm={12}
      md={{ span: 6, offset: 3 }}
      className="tile cursor-pointer"
      onClick={handleClick}
    >
      <p>
        Posted by u/
        {author}
        {createdAt}
      </p>
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

Tile.propTypes = {
  pic: PropTypes.shape({
    id: PropTypes.string,
    url: PropTypes.string,
    body: PropTypes.string,
    title: PropTypes.string,
    ups: PropTypes.string,
    downs: PropTypes.string,
    author: PropTypes.string,
    num_comments: PropTypes.string,
    created_utc: PropTypes.string,
  }).isRequired,
};
