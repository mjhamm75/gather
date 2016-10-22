import React, { Component } from 'react';

import ClientManagement from './ClientManagement';
import Page from './Page.js';

import s from './Main.css';

let clientList = [
  {
    name: 'Jason Hamm',
    dateOpened: '2016-10-09T03:02:14+00:00',
    docsNeeded: 42,
    docsReceived: 16,
    phone: '801-222-3333',
    email: 'jason@hamm.com',
    dateLastReminder: '2016-10-09T03:02:14+00:00'
  },
  {
    name: 'Neely Hamm',
    dateOpened: '2016-10-09T03:02:14+00:00',
    docsNeeded: 25,
    docsReceived: 25,
    phone: '801-222-3333',
    email: 'jason@hamm.com',
    dateLastReminder: '2016-10-09T03:02:14+00:00'
  },
  {
    name: 'Aliece Hamm',
    dateOpened: '2016-10-09T03:02:14+00:00',
    docsNeeded: 25,
    docsReceived: 16,
    phone: '801-222-3333',
    email: 'jason@hamm.com',
    dateLastReminder: '2016-10-09T03:02:14+00:00'
  }
]

class App extends Component {
  clickBell(client, event) {
    event.stopPropagation();
    console.log(`bell ${client.name}`)
  }

  clickRow(client) {
    console.log(`row ${client.name}`)
  }

  clickSettings() {
    console.log(`Settings clicked`);
  }

  clickUser() {
    console.log(`User clicked`);
  }
  render() {
    return (
      <Page
        clientList={clientList}
        clickBell={this.clickBell.bind(this)}
        clickRow={this.clickRow.bind(this)}
        clickSettings={this.clickSettings.bind(this)}
        clickUser={this.clickUser.bind(this)}
      />
    )
  }
}

export default App;
