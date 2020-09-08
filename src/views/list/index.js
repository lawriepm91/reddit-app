import React from 'react';
import { useTopPics } from 'hooks';
import { useSelector } from 'react-redux';
import { picsSelector } from 'selectors';

export default function List() {
  const [isLoading, error] = useTopPics();
  const pics = useSelector(picsSelector);

  if (isLoading) {
    return (
      <p>Loading!</p>
    )
  }

  if (error) {
    return (
      <p>Uh oh!</p>
    );
  }

  console.log(pics);

  return (
    <div>
      <h1>List page</h1>
    </div>
  )
}
