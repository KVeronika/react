import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Home, Details, NoMatch } from './pages';
import { store } from './modules/store';

import './App.scss';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className='app'>
                    <BrowserRouter>
                        <Switch>
                            <Route path='/search' component={Home} />
                            <Route path='/film/:id' component={Details} />
                            <Redirect from='/' to='/search' />
                            <Route component={NoMatch} />
                        </Switch>
                    </BrowserRouter>
                </div>
            </Provider>
        );
    }
}

export default App;
