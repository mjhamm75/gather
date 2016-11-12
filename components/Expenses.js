import React from 'react';

import s from './Expenses.css';

import Expense from './Expense';

export default () => {
  return (
    <div className={s.expenses}>
      <div className={s.header}>
        <div className={s.title}>Request for Documentation</div>
        <div className={s.add}>+ Add Category</div>
      </div>
      <div className={s.expenseGroup}>
        <Expense
          title="Monthly Expenses"
        />
        <Expense
          title="Income"
        />
        <Expense
          title="Taxes"
        />
        <Expense
          title="Monthly Expenses"
        />
        <Expense
          title="Income"
        />
        <Expense
          title="Taxes"
        />
      </div>
    </div>
  )
}
