import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { matchPath } from 'react-router';

import {
  Navbar as Nav,
  Nav as InnerNav,
} from 'react-bootstrap';
import { ReactComponent as Logo } from 'assets/logo.svg';
import urls from 'urls';

export default function Navbar() {
  const { pathname } = useLocation();
  const location = matchPath(pathname, {
    path: urls.pics.detail(),
  });
  const isOnDetailPage = location && location.path === urls.pics.detail();

  return (
    <Nav bg="white" className="mb-3">
      <Nav.Brand>
        <Link to="/">
          <Logo width="50" height="30" />
        </Link>
      </Nav.Brand>
      {isOnDetailPage && (
        <InnerNav className="ml-auto">
          <Link to={urls.pics()}>Go back</Link>
        </InnerNav>
      )}
    </Nav>
  );
}
