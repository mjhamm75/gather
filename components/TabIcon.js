import React from 'react';
import Check from './Check';

import s from './TabIcon.css';

export default ({ count, isComplete, label }) => {
  return (
    <div className={s.tabIcon}>
      <span className={s.icon}>
          {isComplete ? <Check addPadding /> : count}
      </span>
      <span>{label}</span>
    </div>
  )
}
