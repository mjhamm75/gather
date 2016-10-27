import React from 'react';

import s from './Notes.css'

export default () => (
  <div className={s.notes}>
    <label>Notes</label>
    <textarea className={s.textArea}/>
  </div>
)
