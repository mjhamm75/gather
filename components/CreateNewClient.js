import React, { Component } from 'react';
import {
  browserHistory
} from 'react-router';
import { connect } from 'react-redux';

import ClientInfo from './ClientInfo';
import Notes from './Notes';
import Expenses from './Expenses';

import {
  clearNewAccountForm,
  updateNewAccountFormElement
} from '../actions/new.account.actions';

import s from './CreateNewClient.css';

class CreateNewClient extends Component {
  cancel() {
    this.props.clearNewAccountForm();
    browserHistory.push('/');
  }

  render() {
    let {
      clearNewAccountForm,
      form,
      updateForm
    } = this.props;
    return (
      <div className={s.background}>
        <div className={s.border}>
          <div className={s.toolbar}>
            <div className={s.title}>New Account</div>
            <div>
              <a
                className={s.cancel}
                onClick={this.cancel.bind(this)}
              >Cancel</a>
            </div>
            <div className={s.create}>Create</div>
          </div>
          <div className={s.accountInfo}>
            <ClientInfo
              form={form}
              updateForm={updateForm}
            />
            <Notes
              notes={form.notes}
              updateForm={updateForm}
            />
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
  clearNewAccountForm: () => dispatch(clearNewAccountForm()),
  updateForm: (key, value) => dispatch(updateNewAccountFormElement(key, value))
}))(CreateNewClient);
