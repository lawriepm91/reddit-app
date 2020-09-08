import React from 'react';
import { usePic } from 'hooks';
import Comment from 'views/detail/comment';
import Tile from 'views/tile';

export default function Detail() {
  const [isLoading, pic, comments, error] = usePic();

  if (isLoading) {
    return (
      <p className="loading">Loading!</p>
    );
  }

  if (error) {
    return (
      <p className="error">Uh oh!</p>
    );
  }

  return (
    <div>
      <p>Detail page</p>
      <Tile pic={pic} />
      {comments.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </div>
  );
}
