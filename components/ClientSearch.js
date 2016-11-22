import React from 'react';

import s from './ClientSearch.css'

export default ({updateSearchValue}) => (
  <div>
    <input
      className={s.input}
      onChange={e => updateSearchValue({searchValue: e.target.value})}
      placeholder="Search by Client"></input>
  </div>
)
