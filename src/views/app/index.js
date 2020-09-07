import React from 'react';
import { Route, Switch } from 'react-router-dom';
import List from 'views/list';
import urls from 'urls';

export default function App() {
  return (
    <div>
      <Switch>
        <Route path={urls.pics()}><List /></Route>
      </Switch>
    </div>
  )
}
