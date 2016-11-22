import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import ClientInfo from './ClientInfo';
import Notes from './Notes';
import Expenses from './Expenses';

import { updateNewAccountFormElement } from '../actions/new.account.actions';

import s from './CreateNewClient.css';

class CreateNewClient extends Component {
  render() {
    let { form, updateForm } = this.props;
    return (
      <div className={s.background}>
        <div className={s.border}>
          <div className={s.toolbar}>
            <div className={s.title}>New Account</div>
            <div>
              <Link className={s.cancel} to="/">Cancel</Link>
            </div>
            <div className={s.create}>Create</div>
          </div>
          <div className={s.accountInfo}>
            <ClientInfo
              form={form}
              updateForm={updateForm}
            />
            <Notes />
          </div>
          <div className={s.expenseInfo}>
            <Expenses />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  form: state.newAccount
}), dispatch => ({
  updateForm: (key, value) => dispatch(updateNewAccountFormElement(key, value))
}))(CreateNewClient);
