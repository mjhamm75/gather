import React from 'react';

import s from './ClientInfo.css';

export default () => (
  <div className={s.clientInfo}>
    <div className={s.column}>
      <div className={s.group}>
        <label>Name</label>
        <input />
      </div>
      <div className={s.group}>
        <label>Street Address</label>
        <input />
        <input />
      </div>
      <div className={s.cityGroup}>
        <div className={s.group}>
          <label>City</label>
          <input />
        </div>
        <div className={s.group}>
          <label>State</label>
          <input />
        </div>
        <div className={s.group}>
          <label>Zip</label>
          <input />
        </div>
      </div>
      <div className={s.group}>
        <label>Phone Number</label>
        <input />
      </div>
      <div className={s.group}>
        <label>Email Address</label>
        <input />
      </div>
    </div>
    <div className={s.column}>
      <div className={s.group}>
        <label>Name</label>
        <input />
      </div>
      <div className={s.group}>
        <label>Street Address</label>
        <input />
        <input />
      </div>
      <div className={s.cityGroup}>
        <div className={s.group}>
          <label>City</label>
          <input />
        </div>
        <div className={s.group}>
          <label>State</label>
          <input />
        </div>
        <div className={s.group}>
          <label>Zip</label>
          <input />
        </div>
      </div>
      <div className={s.group}>
        <label>Phone Number</label>
        <input />
      </div>
      <div className={s.group}>
        <label>Email Address</label>
        <input />
      </div>
    </div>
  </div>
)
