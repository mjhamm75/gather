import React, { Component } from 'react';
import { formatDate } from './../utils/date.utils';
import ProgressBar from './ProgressBar';

import s from './Client.css';

import Bell from './Bell';
import DotDotDot from './DotDotDot';
import PopupMenu from './PopupMenu';

class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    }
  }
  clickDot() {
    this.setState({
      showPopup: !this.state.showPopup
    })
  }
  render() {
    let {
      client,
      clickBell,
      clickRow
    } = this.props;

    return (
      <div className={s.row}>
        <div className={s.cell}>{client.name}</div>
        <div className={s.cell}>{formatDate(client.dateOpened)}</div>
        <div className={s.cell}>
          <ProgressBar
            received={client.docsReceived}
            needed={client.docsNeeded}
          />
        </div>
        <div className={s.cell}>{`${client.docsNeeded} of ${client.docsReceived}`}</div>
        <div className={s.cell}>{client.phone}</div>
        <div className={s.cell}>{client.email}</div>
        <div className={s.cell}>{formatDate(client.dateLastReminder)}</div>
        <div className={s.cellRightAlign}>
          <Bell
          />
        </div>
        <div className={s.cellRight}>
          <DotDotDot clickDot={() => this.clickDot()} />
          { this.state.showPopup ? <PopupMenu /> : null }
        </div>
      </div>
    )
  }
}

export default Client;
