import React from 'react';

import s from './ClientStatus.css';

export default ({counts: { complete, inProgress, starting }}) => (
  <div className={s.clientStatus}>
    <div className={s.box}>
      <div className={s.redBox}></div>
      <div className={s.text}>{starting} Just Starting</div>
    </div>
    <div className={s.box}>
      <div className={s.yellowBox}></div>
      <div className={s.text}>{inProgress} Partly Complete</div>
    </div>
    <div className={s.box}>
      <div className={s.greenBox}></div>
      <div className={s.text}>{complete} Complete</div>
    </div>
  </div>
)
