import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import ClientList from './ClientList';
import ClientSearch from './ClientSearch';
import ClientStatus from './ClientStatus';
import SendReminderToAll from './SendReminderToAll';

import s from './ClientManagement.css';

class ClientManagement extends Component {
  createNewAccount() {
    console.log('create new account');
  }

  render() {
    return (
      <div className={s.clientManagementFrame}>
        <div className={s.frameBar}>
          <div className={s.active}>Active (3)</div>
          <div className={s.archived}>Archived (122)</div>
          <div className={s.createNew}>
            <Link
              className={s.link}
              to={`/create`}
            >+ Create New Account</Link>
          </div>
        </div>
        <div className={s.clientManagement}>
          <div className={s.tableActionBar}>
            <ClientSearch />
            <ClientStatus />
            <SendReminderToAll />
          </div>
          <ClientList
            clientList={this.props.clients}
            />
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  clients: state.clients
}))(ClientManagement);
