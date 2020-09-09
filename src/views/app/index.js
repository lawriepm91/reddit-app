import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import List from 'views/list';
import urls from 'urls';

export default function App() {
  return (
    <main className="primary-background min-vh-100">
      <Router>
        <Switch>
          <Route path={['/', urls.pics()]}><List /></Route>
        </Switch>
      </Router>
    </main>
  );
}
