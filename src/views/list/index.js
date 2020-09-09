import React from 'react';
import { Container, Row } from 'react-bootstrap';
import {
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom';
import Navbar from 'navbar';
import Detail from 'views/detail';
import PicList from 'views/list/list';
import urls from 'urls';

export default function List() {
  const match = useRouteMatch();

  return (
    <>
      <Navbar />
      <Container>
        <Row className="mx-0">
          <Switch>
            <Route path={urls.pics.detail()}><Detail /></Route>
            <Route path={match.path}><PicList /></Route>
          </Switch>
        </Row>
      </Container>
    </>
  );
}
