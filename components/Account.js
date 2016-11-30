import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs, { Panel } from 'react-simpletabs'

import Downloads from './Downloads';
import '!style!css!sass!./../styles/react-simpletabs.scss';

class Account extends Component {
  render() {
    return (
      <div>
        <Tabs>
          <Panel title="Account Information">One</Panel>
          <Panel title="Documents">
            <Downloads />
          </Panel>
        </Tabs>
      </div>
    )
  }
}

export default connect(state => {

})(Account);
