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
  constructor(props) {
    super(props);
    this.state = {
      searchValue: null
    }
  }
  createNewAccount() {
    console.log('create new account');
  }

  filterClients(searchValue, client) {
    return searchValue === null ? true : client.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
  }

  updateSearchValue(value) {
    this.setState({
      searchValue: value.searchValue
    })
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
            <ClientSearch
              updateSearchValue={this.updateSearchValue.bind(this)}
            />
            <ClientStatus
              counts={counts}
            />
            <SendReminderToAll />
          </div>
          <ClientList
            clientList={activeClients.filter(this.filterClients.bind(this, this.state.searchValue))}
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
