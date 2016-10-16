import React from 'react';
import { formatDate } from './../utils/date.utils';
import ProgressBar from './ProgressBar';

import s from './Client.css';

import Bell from './Bell';
import DotDotDot from './DotDotDot';

const Client = ({
  client,
  clickBell,
  clickDot,
  clickRow
}) => {
  return (
    <div className={s.row} onClick={clickRow.bind(this, client)}>
      <div className={s.cell}>{client.name}</div>
      <div className={s.cell}>{formatDate(client.dateOpened)}</div>
      <div className={s.cell}>
        <ProgressBar
          received={client.docsReceived}
          needed={client.docsNeeded}
        />
      </div>
      <div className={s.cell}>{`${client.docsNeeded} of ${client.docsReceived}`}</div>
      <div className={s.cell}>{client.phone}</div>
      <div className={s.cell}>{client.email}</div>
      <div className={s.cell}>{formatDate(client.dateLastReminder)}</div>
      <div className={s.cellRightAlign}>
        <Bell
          clickBell={clickBell.bind(this, client)}
        />
      </div>
      <div className={s.cellRight}>
        <DotDotDot
          clickDot={clickDot.bind(this, client)}
        />
      </div>
    </div>
  )
}

export default Client;
