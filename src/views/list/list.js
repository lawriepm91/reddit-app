import React from 'react';
import { useHistory } from 'react-router-dom';
import nextId from 'react-id-generator';
import { useTopPics } from 'hooks';
import Tile from 'views/tile';
import Loading from 'loading';
import Error from 'error';
import urls from 'urls';

export default function List() {
  const [isLoading, pics, error] = useTopPics();
  const history = useHistory();

  const handleClick = (id) => {
    history.push(urls.pics.detail(id));
  };

  if (isLoading) {
    return (
      <>
        {[...Array(20)].map(() => (<Loading key={nextId()} />))}
      </>
    );
  }

  if (error) {
    return (
      <Error />
    );
  }

  return (
    <>
      {pics.map((pic) => (
        <Tile
          pic={pic}
          key={pic.id}
          className="cursor-pointer"
          handleClick={() => handleClick(pic.id)}
        />
      ))}
    </>
  );
}
