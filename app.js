import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import '!style!css!sass!./styles/react-select.scss';
import '!style!css!sass!./styles/reset.scss';

import Page from './components/Page';

import ClientManagement from './components/ClientManagement';
import CreateNewClient from './components/CreateNewClient';

import reducer from './reducers'


let store = createStore(reducer);

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Router path="/" component={Page}>
        <Route path="create" component={CreateNewClient}/>
        <IndexRoute component={ClientManagement}/>
      </Router>
    </Router>
  </Provider>
), document.getElementById('app'));
