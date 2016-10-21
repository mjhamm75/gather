import React from 'react';

import s from './ClientStatus.css';

export default () => (
  <div className={s.clientStatus}>
    <div className={s.box}>
      <div className={s.redBox}></div>
      <div className={s.text}>29 Need Documents</div>
    </div>
    <div className={s.box}>
      <div className={s.yellowBox}></div>
      <div className={s.text}>3 Partly Complete</div>
    </div>
    <div className={s.box}>
      <div className={s.greenBox}></div>
      <div className={s.text}>2 Complete</div>
    </div>
  </div>
)
