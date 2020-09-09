import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Navbar as Nav,
  Nav as InnerNav,
} from 'react-bootstrap';
import queryString from 'query-string'
import urls from 'urls';

export default function Navbar() {
  const { pathname } = useLocation();
  const history = useHistory();
  console.log(history);
  const value = queryString.parse(pathname, {
    arrayFormat: 'comma',
    parseNumbers: true,
    parseBooleans: true,
  });

  return (
    <Nav bg="white" className="mb-3">
      <Nav.Brand>
        <Link to="/">
          Reddit
        </Link>
      </Nav.Brand>
      <InnerNav className="ml-auto">
        <Link to={urls.pics()}>Top Pics</Link>
      </InnerNav>
    </Nav>
  );
}
