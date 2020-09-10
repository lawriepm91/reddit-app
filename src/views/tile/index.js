import React from 'react';
import { Col, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { UpVote, DownVote, Comments } from 'icons';
import Award from './award';
import './index.scss';

export default function Tile({
  pic,
  className,
  handleClick,
  children,
}) {
  const {
    url,
    author,
    title,
    created_utc: createdAt,
    ups,
    downs,
    num_comments: noOfComment,
    all_awardings: awardings,
  } = pic;

  return (
    <Col
      xs={12}
      md={{ span: 10, offset: 1 }}
      lg={{ span: 8, offset: 2 }}
      className={`tile p-3 rounded ${className} mb-3 bg-white`}
      onClick={handleClick}
    >
      <div className="d-flex mb-2 align-items-center flex-wrap">
        <small className="color-grey">
          Posted by u/
          {author}
          &nbsp;
          {createdAt}
        </small>
        {awardings.map((award) => <Award award={award} />)}
      </div>
      <h4>{title}</h4>
      <div>
        <Image src={url} className="tile-image--large" />
      </div>
      <div className="d-flex mt-2">
        <UpVote value={ups} />
        <DownVote value={downs} />
        <Comments value={noOfComment} />
      </div>
      {children}
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
    all_awardings: PropTypes.shape([{
      resized_icons: PropTypes.shape([{
        url: PropTypes.string.isRequired,
      }]),
      count: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }]),
  }).isRequired,
  className: PropTypes.string,
  handleClick: PropTypes.func,
  children: PropTypes.element,
};

Tile.defaultProps = {
  className: '',
  handleClick: () => {},
  children: <></>,
};
