import React from 'react';
import Select from 'react-select';

import states from '../utils/states';

import s from './ClientInfo.css';

export default ({form, updateForm}) => (
  <div className={s.clientInfo}>
    <div className={s.header}>
      <div className={s.title}>Account Information</div>
      <div>+ Add Responsible Parties</div>
    </div>
    <div className={s.columns}>
      <div className={s.column}>
        <div className={s.group}>
          <label>Name</label>
          <input
            onChange={e => updateForm('primaryName', e.target.value)}
            value={form.primaryName}
          />
        </div>
        <div className={s.group}>
          <label>Street Address</label>
          <input
            onChange={e => updateForm('primaryStreet1', e.target.value)}
            value={form.primaryStreet1}
          />
          <input
            onChange={e => updateForm('primaryStreet2', e.target.value)}
            value={form.primaryStreet2}
          />
        </div>
        <div className={s.cityGroup}>
          <div className={s.group}>
            <label>City</label>
            <input
              onChange={e => updateForm('primaryCity', e.target.value)}
              value={form.primaryCity}
            />
          </div>
          <div className={s.group}>
            <label>State</label>
            <Select
              options={states}
              onChange={state => updateForm('primaryState', state)}
              value={form.primaryState}
            />
          </div>
          <div className={s.group}>
            <label>Zip</label>
            <input
              onChange={e => updateForm('primaryZip', e.target.value)}
              value={form.primaryZip}
            />
          </div>
        </div>
        <div className={s.group}>
          <label>Phone Number</label>
          <input
            onChange={e => updateForm('primaryPhone', e.target.value)}
            value={form.primaryPhone}
          />
        </div>
        <div className={s.group}>
          <label>Email Address</label>
          <input
            onChange={e => updateForm('primaryEmail', e.target.value)}
            value={form.primaryEmail}
          />
        </div>
      </div>
      <div className={s.column}>
        <div className={s.group}>
          <label>Name</label>
          <input
            onChange={e => updateForm('secondaryName', e.target.value)}
            value={form.secondaryName}
          />
        </div>
        <div className={s.group}>
          <label>Street Address</label>
          <input
            onChange={e => updateForm('secondaryStreet1', e.target.value)}
            value={form.secondaryStreet1}
          />
          <input
            onChange={e => updateForm('secondaryStreet2', e.target.value)}
            value={form.secondaryStreet2}
          />
        </div>
        <div className={s.cityGroup}>
          <div className={s.group}>
            <label>City</label>
            <input
              onChange={e => updateForm('secondaryCity', e.target.value)}
              value={form.secondaryCity}
            />
          </div>
          <div className={s.group}>
            <label>State</label>
            <Select
              options={states}
              onChange={state => updateForm('secondaryState', state)}
              value={form.secondaryState}
              />
          </div>
          <div className={s.group}>
            <label>Zip</label>
            <input
              onChange={e => updateForm('secondaryZip', e.target.value)}
              value={form.secondaryZip}
            />
          </div>
        </div>
        <div className={s.group}>
          <label>Phone Number</label>
          <input
            onChange={e => updateForm('secondaryPhone', e.target.value)}
            value={form.secondaryPhone}
          />
        </div>
        <div className={s.group}>
          <label>Email Address</label>
          <input
            onChange={e => updateForm('secondaryEmail', e.target.value)}
            value={form.secondaryEmail}
          />
        </div>
      </div>
    </div>
  </div>
)
