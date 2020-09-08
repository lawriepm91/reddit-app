import React from 'react';
import { useTopPics } from 'hooks';
import { Container, Row } from 'react-bootstrap';
import Tile from 'views/tile';

export default function List() {
  const [isLoading, pics, error] = useTopPics();

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
    <Container>
      <Row>
        {pics.map((pic) => (
          <Tile pic={pic} key={pic.id} />
        ))}
      </Row>
    </Container>
  );
}
