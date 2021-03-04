import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import MainNavigation from './components/MainNavigation';
import Users from './components/Users';
import NewPlace from './components/NewPlace';

function App() {
  return (
    <>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact component={Users} />
          <Route path="/places/new" exact component={NewPlace} />
          <Redirect to="/" />
        </Switch>
      </main>
    </>
  );
}

export default App;
