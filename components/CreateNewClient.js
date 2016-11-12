import React, { Component } from 'react';
import { Link } from 'react-router';

import ClientInfo from './ClientInfo';
import Notes from './Notes';
import Expenses from './Expenses';

import s from './CreateNewClient.css';

class CreateNewClient extends Component {
  render() {
    return (
      <div className={s.background}>
        <div className={s.border}>
          <div className={s.toolbar}>
            <div className={s.title}>New Account</div>
            <div>
              <Link className={s.cancel} to="/">Cancel</Link>
            </div>
            <div className={s.create}>Create</div>
          </div>
          <div className={s.accountInfo}>
            <ClientInfo />
            <Notes />
          </div>
          <div className={s.expenseInfo}>
            <Expenses />
          </div>
        </div>
      </div>
    )
  }
}

export default CreateNewClient;
