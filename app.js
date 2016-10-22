import React from 'react';
import { render } from 'react-dom';

import Page from './components/Page';
import ClientManagement from './components/ClientManagement';

import { IndexRoute, Router, Route, browserHistory } from 'react-router';

render((
  <Router history={browserHistory}>
    <Router path="/" component={Page}>
      <IndexRoute component={ClientManagement}/>
    </Router>
  </Router>
), document.getElementById('app'));
