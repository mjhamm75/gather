import React from 'react';
import Select from 'react-select';

import s from './Expense.css';

export default ({title, options}) => {
  return (
    <div className={s.expense}>
      <div className={s.title}>{title}</div>
      <Select
        options={options}
        placeholder="- Request documents -"
      />
      <div className={s.group}>
        <input type="checkbox"/><label>Mortgage</label>
      </div>
      <div className={s.group}>
        <input type="checkbox"/><label>Car Payment</label>
      </div>
      <div className={s.group}>
        <input type="checkbox"/><label>Utilities</label>
      </div>
    </div>
  )
}
