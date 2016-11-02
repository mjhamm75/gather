import React from 'react';
import Select from 'react-select';

import states from '../utils/states';

import s from './ClientInfo.css';

const log = state => {
  console.log(state);
}

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
          <Select
            options={states}
            onChange={log}
          />
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
          <Select
            options={states}
            onChange={log}
          />
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
