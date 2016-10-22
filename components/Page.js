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
      <div style={{color: 'white', marginRight: 'auto', fontSize: '32px'}}>Our Logo</div>
      <div className={s.user}>
        <UserInfo />
        <div className={s.arrowDown}/>
      </div>
      <div className={s.settings}>
        <Settings />
        <div className={s.arrowDown}/>
      </div>
    </div>
    <ClientManagement
      clientList={clientList}
      clickBell={clickBell}
      clickRow={clickRow}
    />
  </div>
)
