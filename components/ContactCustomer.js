import React, { Component } from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import Bell from './Bell';

import s from './ContactCustomer.css';

class ContactCustomer extends Component {
  constructor(props){
    super(props);
    this.state = {
      isShowingModal: false
    }
  }

  handleClick = () => this.setState({isShowingModal: true})
  handleClose = () => this.setState({isShowingModal: false})

  render() {
    return <button onClick={this.handleClick}>
      {
        this.state.isShowingModal &&
        <ModalContainer onClose={this.handleClose}>
          <ModalDialog onClose={this.handleClose}>
          <div className={s.modal}>
            <Bell
              medium
            />
            <div className={s.reminderText}>Send Reminder</div>
            <div className={s.buttons}>
              <a className={s.button}
                onClick={() => console.log("text")}
              >
                <span className={s.buttonType}>Text</span>
                <span>(801) 999-0000</span>
              </a>
              <a className={s.button}
                onClick={() => console.log("text")}
              >
                <span className={s.buttonType}>Email</span>
                <span>(801) 999-0000</span>
              </a>
            </div>
          </div>
          </ModalDialog>
        </ModalContainer>
      }
    </button>;
  }
}

export default ContactCustomer;
