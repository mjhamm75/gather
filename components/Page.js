import React from 'react';

import ClientManagement from './ClientManagement';
import UserInfo from './UserInfo';
import Settings from './Settings';

import s from './Page.css';

export default ({
  clientList,
  clickBell,
  clickRow
}) => (
  <div className={s.page}>
    <div className={s.toolbar}>
      <div>
        <UserInfo />
      </div>
      <div>
        <Settings />
      </div>
    </div>
    <ClientManagement
      clientList={clientList}
      clickBell={clickBell}
      clickRow={clickRow}
    />
  </div>
)
