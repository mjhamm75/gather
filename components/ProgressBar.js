import React from 'react';
import s from './ProgressBar.css';

const ProgressBar = ({needed, received}) => {
  let percent = (received / needed) * 100;
  return (
    <div className={s.flex}>
      <div className={s.progress}>
        <span className={s.bar} style={{"width": `${percent}%`}}></span>
      </div>
      <span>{`${needed} of ${received}`}</span>
    </div>
  )
}

export default ProgressBar;
