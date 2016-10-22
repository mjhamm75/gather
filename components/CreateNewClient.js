import React, { Component } from 'react';
import { Link } from 'react-router';

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
            <div className={s.clientInfo}>
              <div className={s.column}>
                <label>Name</label>
                <input />
                <label>Street Address</label>
                <input />
                <input />
                <label>City</label>
                <input />
                <label>State</label>
                <input />
                <label>Zip</label>
                <input />
                <label>Phone Number</label>
                <input />
                <label>Email Address</label>
                <input />
              </div>
              <div className={s.column}>
                <label>Spouse</label>
                <input />
                <label>Street Address</label>
                <input />
                <input />
                <label>City</label>
                <input />
                <label>State</label>
                <input />
                <label>Zip</label>
                <input />
                <label>Phone Number</label>
                <input />
                <label>Email Address</label>
                <input />
              </div>
            </div>
            <div className={s.notes}>
              <label>Notes</label>
              <textarea className={s.textArea}/>
            </div>
          </div>
          <div className={s.expenseInfo}>

          </div>
        </div>
      </div>
    )
  }
}

export default CreateNewClient;
