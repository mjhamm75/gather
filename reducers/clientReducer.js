export const UPDATE_CLIENTS = 'UPDATE_CLIENTS';
import { complete, starting, inProgress } from '../utils/client.utils';

const initialState = [{
    name: 'Jason Hamm',
    archived: false,
    dateOpened: '2016-10-09T03:02:14+00:00',
    docsNeeded: 42,
    docsReceived: 16,
    phone: '801-222-3333',
    email: 'jason@hamm.com',
    dateLastReminder: '2016-10-09T03:02:14+00:00'
  },
  {
    name: 'Neely Hamm',
    archived: false,
    dateOpened: '2016-10-09T03:02:14+00:00',
    docsNeeded: 25,
    docsReceived: 25,
    phone: '801-222-3333',
    email: 'jason@hamm.com',
    dateLastReminder: '2016-10-09T03:02:14+00:00'
  },
  {
    name: 'Aliece Hamm',
    archived: false,
    dateOpened: '2016-10-09T03:02:14+00:00',
    docsNeeded: 25,
    docsReceived: 16,
    phone: '801-222-3333',
    email: 'jason@hamm.com',
    dateLastReminder: '2016-10-09T03:02:14+00:00'
  },
  {
    name: 'Neely Hamm',
    archived: true,
    dateOpened: '2016-10-09T03:02:14+00:00',
    docsNeeded: 25,
    docsReceived: 25,
    phone: '801-222-3333',
    email: 'jason@hamm.com',
    dateLastReminder: '2016-10-09T03:02:14+00:00'

  }
]

export default (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_CLIENTS:
      return state;
    default:
      return state;
  }
}

export const getArchivedCount = (clients) => {
  return clients.filter(client => client.archived === true);
}

export const getActiveClients = (clients) => {
  return clients.filter(client => client.archived == false);
}

export const getClientCounts = (clients) => {
  let nonArchived = clients.filter(client => client.archived === false);
  return {
    complete: nonArchived.filter(client => {
      let percent = (client.docsReceived / client.docsNeeded) * 100;
      return complete(percent);
    }).length,
    starting: nonArchived.filter(client => {
      let percent = (client.docsReceived / client.docsNeeded) * 100;
      return starting(percent);
    }).length,
    inProgress: nonArchived.filter(client => {
      let percent = (client.docsReceived / client.docsNeeded) * 100;
      return inProgress(percent);
    }).length
  }
}
