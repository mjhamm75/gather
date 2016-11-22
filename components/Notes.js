import React from 'react';

import s from './Notes.css'

export default () => (
  <div className={s.notes}>
    <div className={s.title}>Instructions</div>
    <div className={s.notesWrapper}>
      <label>Notes</label>
      <textarea className={s.textArea}/>
    </div>
  </div>
)
