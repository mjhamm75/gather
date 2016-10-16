import React from 'react';
import classnames from 'classnames';
import s from './ProgressBar.css';

const ProgressBar = ({needed, received}) => {
  let percent = (received / needed) * 100;
  let barStyle = {
    width: `${percent - 2}%`
  }
  let barClass = classnames(s.bar, {
    [s.high]: percent === 100,
    [s.middle]: percent >= 40 && percent < 100,
    [s.low]: percent > 0 && percent <= 39
  })
  return (
    <div className={s.flex}>
      <div className={s.progress}>
        <span className={barClass} style={barStyle}></span>
      </div>
    </div>
  )
}

export default ProgressBar;
