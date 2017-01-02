import React, { Component } from 'react';
import {
  browserHistory
} from 'react-router';
import { connect } from 'react-redux';

import ClientInfo from './ClientInfo';
import Check from './Check';
import Notes from './Notes';
import Expenses from './Expenses';
import CreateAccount from './CreateAccount';
import { Tabs, Tab } from './Tabs';
import TabIcon from './TabIcon';

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
      <Tabs
        onChange={tab => {}}
      >
        <Tab
          count="1"
          isComplete={false}
          key="first"
          label="Create Account"
        >
          <CreateAccount />
        </Tab>
        <Tab
          count="2"
          isComplete={false}
          key="second"
          label="Personal Info"
        >
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
        </Tab>
        <Tab
          count="3"
          isComplete={false}
          key="third"
          label="Documents"
        >
          <div>3rd Tab</div>
        </Tab>
      </Tabs>
    )
  }
}

export default connect(state => ({
  form: state.newAccount
}), dispatch => ({
  clearNewAccountForm: () => dispatch(clearNewAccountForm()),
  updateForm: (key, value) => dispatch(updateNewAccountFormElement(key, value))
}))(CreateNewClient);
