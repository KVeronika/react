import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Home, Details, NoMatch } from './pages';

import './App.scss';


class App extends Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <Switch>
            <Route path='/search' component={Home} />
            <Route path='/film' component={Details} />
            <Redirect from='/' to='/search' />
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
};

export default App;
