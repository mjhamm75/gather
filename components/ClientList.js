import React from 'react';
import Client from './Client';

import s from './ClientList.css';

const ClientList = ({
  clientList,
  clickBell,
  clickRow
}) => {
  let clientDom = clientList.map((client, index) => <Client key={index} client={client} />);
  return (
    <div className={s.table}>
      <div className={s.header}>
        <div className={s.cell}>Client</div>
        <div className={s.cell}>Date Opened</div>
        <div className={s.cell}>Document Status</div>
        <div className={s.cell}></div>
        <div className={s.cell}>Phone Number</div>
        <div className={s.cell}>Email</div>
        <div className={s.cell}>Last Reminder Sent</div>
        <div className={s.cell}>Send Reminder</div>
        <div className={s.cell}></div>
      </div>
      {clientDom}
    </div>
  )
}

export default ClientList;
