import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Users from './components/Users';
import NewPlace from './components/NewPlace';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/places/new" exact component={NewPlace} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
