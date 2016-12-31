import React from 'react';

import s from './CreateAccount.css';

export default () => (
  <div className={s.createAccount}>
    <div className={s.title}>Please confirm email address.</div>
    <div className={s.email}>
      <label className={s.label}>Email Address</label>
      <input className={s.input}/>
    </div>
    <div className={s.title}>Choose a password with at least 8 characters</div>
    <div className={s.password}>
      <label className={s.label}>Password</label>
      <input
        className={s.passwordInput}
        placeholder="Password"
        />
      <input
        className={s.passwordInput}
        placeholder="Confirm password"
        />
    </div>
    <a className={s.button}>Continue</a>
  </div>
)
