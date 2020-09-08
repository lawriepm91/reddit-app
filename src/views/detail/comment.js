import React from 'react';

export default function Comment(props) {
  const { body, author, created_utc: createdAt } = props;
  return (
    <div>
      <p>{author} &#183; {createdAt}</p>
      <p>{ body }</p>
    </div>
  );
}