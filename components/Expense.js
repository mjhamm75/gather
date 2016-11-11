import React from 'react';
import Select from 'react-select';
import Check from './Check';
import Delete from './Delete';

import s from './Expense.css';

export default ({title, options}) => {
  return (
    <div className={s.expense}>
      <div className={s.title}>{title}</div>
      <Select
        options={options}
        placeholder="- Request documents -"
      />
      <div className={s.grouping}>
        <div className={s.group}>
          <span className={s.check}>
            <Check />
          </span>
          <label>Mortgage</label>
          <span className={s.delete}>
            <Delete
              onClick={() => console.log('clicking')}
            />
          </span>
        </div>
        <div className={s.group}>
          <span className={s.check}>
            <Check />
          </span>
          <label>Car Payment</label>
          <span className={s.delete}>
            <Delete
              onClick={() => console.log('clicking')}
            />
          </span>
        </div>
        <div className={s.group}>
          <span className={s.check}>
            <Check />
          </span>
          <label>Utilities</label>
          <span className={s.delete}>
            <Delete
              onClick={() => console.log('clicking')}
            />
          </span>
        </div>
      </div>
    </div>
  )
}
