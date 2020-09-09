import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as UpArrow } from 'assets/upvote.svg';
import { ReactComponent as DownArrow } from 'assets/downvote.svg';
import { ReactComponent as CommentsIcon } from 'assets/comment.svg';

function Icon({ value, Image }) {
  return (
    <div className="d-flex align-items-center mr-2">
      <Image height="15" width="15" />
      <small className="color-grey">{value}</small>
    </div>
  );
}

Icon.propTypes = {
  Image: PropTypes.element.isRequired,
  value: PropTypes.string.isRequired,
};

export function UpVote({ value }) {
  return (
    <Icon
      Image={UpArrow}
      value={value}
    />
  );
}

UpVote.propTypes = {
  value: PropTypes.string.isRequired,
};

export function DownVote({ value }) {
  return (
    <Icon
      Image={DownArrow}
      value={value}
    />
  );
}

DownVote.propTypes = {
  value: PropTypes.string.isRequired,
};

export function Comments({ value }) {
  return (
    <Icon
      Image={CommentsIcon}
      value={value}
    />
  );
}

Comments.propTypes = {
  value: PropTypes.string.isRequired,
};
