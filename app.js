import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Page from './components/Page';
import ClientManagement from './components/ClientManagement';
import reducer from './reducers'

import { IndexRoute, Router, Route, browserHistory } from 'react-router';

let store = createStore(reducer);

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Router path="/" component={Page}>
        <IndexRoute component={ClientManagement}/>
      </Router>
    </Router>
  </Provider>
), document.getElementById('app'));
