import React from 'react';

import Bell from './Bell';

import s from './SendReminderToAll.css';

export default () => (
  <div className={s.reminder}>
    <span className={s.text}>Send reminder to all</span>
    <Bell />
  </div>
)
