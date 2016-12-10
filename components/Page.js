import React, { Component } from 'react';

import ClientManagement from './ClientManagement';
import UserInfo from './UserInfo';
import Settings from './Settings';
import ContactCustomer from './ContactCustomer';

import s from './Page.css';

class Page extends Component {
  render() {
    return (
      <div className={s.page}>
        <ContactCustomer />
        <div className={s.toolbar}>
          <div style={{color: 'white', marginRight: 'auto', fontSize: '32px'}}>Our Logo</div>
          <div
            className={s.user}
          >
            <UserInfo />
            <div className={s.arrowDown}/>
          </div>
          <div
            className={s.settings}
          >
            <Settings />
            <div className={s.arrowDown}/>
          </div>
        </div>
        <div className={s.content}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Page;
