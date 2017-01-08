import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducer from './reducers'

import '!style!css!sass!./styles/reset.scss';
import '!style!css!sass!./styles/react-select.scss';

import CreateNewClient from './components/CreateNewClient';
import ClientManagement from './components/ClientManagement';

let store = createStore(reducer);

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/create" component={CreateNewClient} />
      <Route path="/clients" component={ClientManagement} />
    </Router>
  </Provider>
), document.getElementById('app'));
