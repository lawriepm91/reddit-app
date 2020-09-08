import React from 'react';

import { ReactComponent as UpArrow } from 'assets/upvote.svg';
import { ReactComponent as DownArrow } from 'assets/downvote.svg';
import { ReactComponent as CommentsIcon } from 'assets/comment.svg';

function Icon({ value, Image }) {
  return (
    <div className="d-flex">
      <Image height="20px" width="20px" />
      <p>{value}</p>
    </div>
  );
}

export function UpVote({ value }) {
  return (
    <Icon
      Image={UpArrow}
      value={value}
    />
  )
}

export function DownVote({ value }) {
  return (
    <Icon
      Image={DownArrow}
      value={value}
    />
  )
}

export function Comments({ value }) {
  return (
    <Icon
      Image={CommentsIcon}
      value={value}
    />
  );
}