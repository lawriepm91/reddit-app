import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import List from 'views/list';
import Detail from 'views/detail';
import urls from 'urls';

export default function App() {
  return (
    <main className="primary-background min-vh-100">
      <Router>
        <Switch>
          <Route exact path={['/', urls.pics()]}><List /></Route>
          <Route exact path={urls.pics.detail()}><Detail /></Route>
        </Switch>
      </Router>
    </main>
  );
}
