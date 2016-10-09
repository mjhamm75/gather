import React from 'react';

import s from './Client.css';

const Client = ({client}) => {
  return (
    <div className={s.row}>
      <div className={s.cell}>{client.name}</div>
      <div className={s.cell}>{client.dateOpened}</div>
      <div className={s.cell}>{client.docsNeeded}</div>
      <div className={s.cell}>{client.phone}</div>
      <div className={s.cell}>{client.email}</div>
      <div className={s.cell}>{client.dateLastReminder}</div>
    </div>
  )
}

export default Client;
