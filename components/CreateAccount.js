import React from 'react';

import s from './CreateAccount.css';

export default () => (
  <div className={s.createAccount}>
    <div>Please confirm email address.</div>
    <div className={s.email}>
      <label>Email Address</label>
      <input/>
    </div>
    <div>Choose a password with at least 8 characters</div>
    <div className={s.password}>
      <label>Password</label>
      <input/>
      <input/>
    </div>
  </div>
)
