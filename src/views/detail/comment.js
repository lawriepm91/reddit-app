import React from 'react';
import PropTypes from 'prop-types';

export default function Comment({ comment }) {
  const { body, author, created_utc: createdAt } = comment;
  return (
    <div>
      <small>
        {author}
        {' '}
        <span className="color-grey">
          &#183;
          {' '}
          {createdAt}
        </span>
      </small>
      <p className="text-break">{ body }</p>
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
