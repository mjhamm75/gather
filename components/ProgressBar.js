import React from 'react';
import s from './ProgressBar.css';

const ProgressBar = ({percent}) => (
  <div className={s.progress}>
    <span className={s.bar} style={{"width": percent}}></span>
  </div>
)

export default ProgressBar;
