import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import nextId from 'react-id-generator';
import { useTopPics } from 'hooks';
import Navbar from 'navbar';
import Detail from 'views/detail';
import Tile from 'views/tile';
import Loading from 'loading';
import Error from 'error';
import urls from 'urls';

export default function List() {
  const [isLoading, pics, error] = useTopPics();
  const match = useRouteMatch();

  const renderBody = () => {
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
          <Tile pic={pic} key={pic.id} />
        ))}
      </>
    );
  };

  return (
    <>
      <Navbar />
      <Container>
        <Row className="mx-0">
          <Switch>
            <Route path={urls.pics.detail()}><Detail /></Route>
            <Route path={match.path}>{renderBody()}</Route>
          </Switch>
        </Row>
      </Container>
    </>
  );
}
