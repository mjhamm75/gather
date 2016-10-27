import React, { Component } from 'react';
import { Link } from 'react-router';

import ClientInfo from './ClientInfo';
import Notes from './Notes';

import s from './CreateNewClient.css';

class CreateNewClient extends Component {
  render() {
    return (
      <div className={s.background}>
        <div className={s.border}>
          <div className={s.toolbar}>
            <div className={s.title}>New Account</div>
            <div
              className={s.cancel}>
              <Link to="/">Cancel</Link>
            </div>
            <div className={s.create}>Create</div>
          </div>
          <div className={s.accountInfo}>
            <ClientInfo />
            <Notes />
          </div>
          <div className={s.expenseInfo}>

          </div>
        </div>
      </div>
    )
  }
}

export default CreateNewClient;
