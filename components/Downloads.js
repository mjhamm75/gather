import React from 'react';

import Download from './Download';
import s from './Downloads.css';

export default () => {
  return (
    <div className={s.downloads}>
      <div className={s.content}>
        <div className={s.items}>
          <Download />
          <Download />
          <Download />
          <Download />
          <Download />
          <Download />
          <Download />
        </div>
      </div>
    </div>
  )
}
