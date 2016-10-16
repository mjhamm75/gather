import React from 'react';

import s from './PopupMenu.css';

import Archive from './Archive';
import Edit from './Edit';

function clickEdit(event) {
  event.stopPropagation();
  console.log('edit')
}

function clickArchive(event) {
  event.stopPropagation();
  console.log('archive');
}
export default ({}) => (
  <div className={s.popupMenu}>
    <div className={s.popupMenuItem} onClick={e => clickEdit(e)}>
      <Edit /><span className={s.text}>Edit</span>
    </div>
    <div className={s.popupMenuItem} onClick={e => clickArchive(e)}>
      <Archive /><span className={s.text}>Archive</span>
    </div>
  </div>
);
