import React from 'react';
import { Col, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { UpVote, DownVote, Comments } from 'icons';
import './index.scss';

export default function Tile({ pic, className, handleClick }) {
  const {
    url,
    author,
    title,
    created_utc: createdAt,
    ups,
    downs,
    num_comments: noOfComment,
  } = pic;

  return (
    <Col
      xs={12}
      md={{ span: 10, offset: 1 }}
      lg={{ span: 8, offset: 2 }}
      className={`tile p-3 rounded ${className} mb-3 bg-white`}
      onClick={handleClick}
    >
      <small className="color-grey mb-2">
        Posted by u/
        {author}
        &nbsp;
        {createdAt}
      </small>
      <h4>{title}</h4>
      <div>
        <Image src={url} />
      </div>
      <div className="d-flex mt-2">
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
  className: PropTypes.string,
  handleClick: PropTypes.func,
};

Tile.defaultProps = {
  className: '',
  handleClick: () => {},
};
