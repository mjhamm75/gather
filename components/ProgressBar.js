import React from 'react';
import classnames from 'classnames';
import s from './ProgressBar.css';

import { complete, starting, inProgress } from '../utils/client.utils';

const ProgressBar = ({needed, received}) => {
  let percent = (received / needed) * 100;
  let barStyle = {
    width: `${percent - 2}%`
  }
  let barClass = classnames(s.bar, {
    [s.high]: complete(percent),
    [s.middle]: inProgress(percent),
    [s.low]: starting(percent)
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
