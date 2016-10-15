import React from 'react';
import { formatDate } from './../utils/date.utils';
import ProgressBar from './ProgressBar';

import s from './Client.css';

const Client = ({client}) => {
  return (
    <div className={s.row}>
      <div className={s.cell}>{client.name}</div>
      <div className={s.cell}>{formatDate(client.dateOpened)}</div>
      <div className={s.cell}>
        <ProgressBar
          received={client.docsReceived}
          needed={client.docsNeeded}
        />
      </div>
      <div className={s.cell}>{client.phone}</div>
      <div className={s.cell}>{client.email}</div>
      <div className={s.cell}>{formatDate(client.dateLastReminder)}</div>
      <div className={s.cell}></div>
    </div>
  )
}

export default Client;
