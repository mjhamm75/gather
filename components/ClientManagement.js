import React, { Component } from 'react';

import ClientList from './ClientList';
import ClientSearch from './ClientSearch';
import ClientStatus from './ClientStatus';
import SendReminderToAll from './SendReminderToAll';

import s from './ClientManagement.css';

let clients =   [{
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

class ClientManagement extends Component {
  render() {
    return (
      <div className={s.clientManagementFrame}>
        <div className={s.frameBar}>
          <div className={s.active}>Active (3)</div>
          <div className={s.archived}>Archived (122)</div>
          <div className={s.link}>+ Create New Account</div>
        </div>
        <div className={s.clientManagement}>
          <div className={s.tableActionBar}>
            <ClientSearch />
            <ClientStatus />
            <SendReminderToAll />
          </div>
          <ClientList
            clientList={clients}
            />
        </div>
      </div>
    )
  }
}

export default ClientManagement;
