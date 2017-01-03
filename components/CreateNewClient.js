import React, { Component } from 'react';
import {
  browserHistory
} from 'react-router';
import { connect } from 'react-redux';

import { Tabs, Tab } from './Tabs';
import CreateAccount from './CreateAccount';
import BasicInfo from './BasicInfo';
import Downloads from './Downloads';

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
          <BasicInfo
            form={form}
          />
        </Tab>
        <Tab
          count="3"
          isComplete={false}
          key="third"
          label="Documents"
        >
          <div>
            <Downloads />
          </div>
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
