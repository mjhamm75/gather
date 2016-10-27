import React from 'react';

import s from './ClientInfo.css';

export default () => (
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
)
