import React from 'react';
import { Container, Row } from 'react-bootstrap';
import nextId from 'react-id-generator';
import { useTopPics } from 'hooks';
import Tile from 'views/tile';
import Loading from 'loading';

export default function List() {
  const [isLoading, pics, error] = useTopPics();
  const renderBody = () => {
    if (true) {
      return (
        <>
          {[...Array(20)].map(() => (<Loading key={nextId()} />))}
        </>
      );
    }

    if (error) {
      return (
        <p className="error">Uh oh!</p>
      );
    }

    return (
      <>
        {pics.map((pic) => (
          <Tile pic={pic} key={pic.id} />
        ))}
      </>
    );
  };

  return (
    <Container>
      <Row>
        {renderBody()}
      </Row>
    </Container>
  );
}
