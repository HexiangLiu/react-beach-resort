//Module
import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

//Components
import Navbar from './components/Navbar';

import './App.scss';

export default function App(props) {
  console.log(useHistory());

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/rooms">
          <Rooms />
        </Route>
        <Route exact path="/rooms/:room">
          <SingleRoom />
        </Route>
        <Route component={Error} />
      </Switch>
    </>
  );
}
