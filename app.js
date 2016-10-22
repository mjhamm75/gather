import React from 'react';
import { render } from 'react-dom';

import Main from './components/Main';

import { Router, Route, browserHistory } from 'react-router';

render((
  <Router history={browserHistory}>
    <Router path="/" component={Main}></Router>
  </Router>
), document.getElementById('app'));
