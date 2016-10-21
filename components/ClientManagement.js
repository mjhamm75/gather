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
        clientList={clientList}
        clickBell={clickBell}
        clickRow={clickRow}
        />
    </div>
  </div>
)

export default ClientManagement;
