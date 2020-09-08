import React from 'react';
import PropTypes from 'prop-types';

export default function Comment({ comment }) {
  const { body, author, created_utc: createdAt } = comment;
  return (
    <div>
      <p>
        {author}
        {' '}
        &#183;
        {' '}
        {createdAt}
      </p>
      <p>{ body }</p>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    body: PropTypes.string,
    author: PropTypes.string,
    created_utc: PropTypes.number,
  }).isRequired,
};
