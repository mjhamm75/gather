import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import ClientList from './ClientList';
import ClientSearch from './ClientSearch';
import ClientStatus from './ClientStatus';
import SendReminderToAll from './SendReminderToAll';

import {
  getActiveClients,
  getArchivedCount,
  getClientCounts
} from '../reducers';

import s from './ClientManagement.css';

class ClientManagement extends Component {
  createNewAccount() {
    console.log('create new account');
  }

  render() {
    let {
      activeClients,
      archived,
      clients,
      counts
    } = this.props;

    return (
      <div className={s.clientManagementFrame}>
        <div className={s.frameBar}>
          <div className={s.active}>Active ({clients.length - archived.length})</div>
          <div className={s.archived}>Archived ({archived.length})</div>
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
            <ClientStatus
              counts={counts}
            />
            <SendReminderToAll />
          </div>
          <ClientList
            clientList={activeClients}
            />
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  activeClients: getActiveClients(state),
  archived: getArchivedCount(state),
  clients: state.clients,
  counts: getClientCounts(state)
}))(ClientManagement);
