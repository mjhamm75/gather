import React from 'react';

import ClientList from './ClientList';
import ClientSearch from './ClientSearch';
import ClientStatus from './ClientStatus';
import SendReminderToAll from './SendReminderToAll';

import s from './ClientManagement.css';

const ClientManagement = ({
  clientList,
  clickBell,
  clickRow
}) => (
  <div className={s.clientManagement}>
    <div className={s.tableActionBar}>
      <ClientSearch />
      <ClientStatus />
      <SendReminderToAll />
    </div>
    <ClientList
      clientList={clientList}
      clickBell={clickBell}
      clickRow={clickRow}
    />
  </div>
)

export default ClientManagement;
