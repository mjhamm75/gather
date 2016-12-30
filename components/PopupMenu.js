import React from 'react';
import { connect } from 'react-redux';

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

const popupStyle = {
  position: 'fixed',
  right: '90px',
  transform: 'translateY(-23px)'
}

const PopupMenu = ({}) => (
  <div className={s.popupMenu} style={popupStyle}>
    <div className={s.popupMenuItem} onClick={e => clickEdit(e)}>
      <Edit /><span className={s.text}>Edit</span>
    </div>
    <div className={s.popupMenuItem} onClick={e => clickArchive(e)}>
      <Archive /><span className={s.text}>Archive</span>
    </div>
  </div>
);

export default connect(state => {
  return {};
}, dispatch => {
  return {};
})(PopupMenu);
