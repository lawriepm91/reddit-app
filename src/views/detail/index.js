import React from 'react';
import { usePic } from 'hooks';
import Comment from 'views/detail/comment';
import Tile from 'views/tile';
import Loading from 'loading';
import Error from 'error';

export default function Detail() {
  const [isLoading, pic, comments, error] = usePic();

  if (isLoading) {
    return (
      <Loading />
    );
  }

  if (error) {
    return (
      <Error />
    );
  }

  return (
    <Tile pic={pic}>
      <>
        <hr />
        {comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </>
    </Tile>
  );
}
