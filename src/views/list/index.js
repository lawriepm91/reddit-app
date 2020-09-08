import React from 'react';
import { useTopPics } from 'hooks';
import { useSelector } from 'react-redux';
import { picsSelector } from 'selectors';
import { Container, Row } from 'react-bootstrap';


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

  console.log(pics);

  return (
    <Container>
      <Row>
        {pics.map(({ data }) => data).map((pic) => (
          JSON.stringify(pic)
        ))}
      </Row>
    </Container>
  )
}
