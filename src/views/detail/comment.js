import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

export default function Comment({ comment }) {
  const { body, author, created_utc: createdAt } = comment;
  return (
    <div className="comment">
      <small>
        {author}
        {' '}
        <span className="color-grey">
          &#183;
          {' '}
          {createdAt}
        </span>
      </small>
      <p className="text-break comment-text--body">{ body }</p>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    body: PropTypes.string,
    author: PropTypes.string,
    created_utc: PropTypes.string,
  }).isRequired,
};
