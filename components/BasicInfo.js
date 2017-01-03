import React from 'react';

import ClientInfo from './ClientInfo';

import s from './BasicInfo.css';

export default ({ cancel, form, updateForm }) => {
  return (
    <div className={s.accountInfo}>
      <ClientInfo
        form={form}
        updateForm={updateForm}
      />
    </div>
  )
}
