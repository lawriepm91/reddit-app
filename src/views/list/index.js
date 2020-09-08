import React from 'react';
import { useTopPics } from 'hooks';
import { useSelector } from 'react-redux';
import { picsSelector } from 'selectors';
import { Container, Row } from 'react-bootstrap';
import Tile from 'views/tile';

export default function List() {
  const [isLoading, error] = useTopPics();
  const pics = useSelector(picsSelector);

  if (isLoading) {
    return (
      <p className="loading">Loading!</p>
    )
  }

  if (error) {
    return (
      <p className="error">Uh oh!</p>
    );
  }

  return (
    <Container>
      <Row>
        {pics.map(({ data }) => (
          <Tile {...data} key={data.id} />
        ))}
      </Row>
    </Container>
  )
}
