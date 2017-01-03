import React from 'react';

import Download from './Download';
import Bell from './Bell';
import s from './Downloads.css';

export default () => {
  return (
    <div className={s.downloads}>
      <div className={s.content}>
        <div>Please provide the following documents.  You may come back later and add documents.  We will send a [daily] reminder by [text]<span className={s.reminder}><span className={s.reminderText}>Change reminder settings.</span><Bell /></span></div>
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
