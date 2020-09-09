import React from 'react';
import { Container, Row } from 'react-bootstrap';
import nextId from 'react-id-generator';
import { useTopPics } from 'hooks';
import Tile from 'views/tile';
import Loading from 'loading';
import Error from 'error';

export default function List() {
  const [isLoading, pics, error] = useTopPics();
  const renderBody = () => {
    if (isLoading) {
      return (
        <>
          {[...Array(20)].map(() => (<Loading key={nextId()} />))}
        </>
      );
    }

    if (true) {
    // if (error) {
      return (
        <>
          <Error />
        </>
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
      <Row className="mx-0">
        {renderBody()}
      </Row>
    </Container>
  );
}
