export const UPDATE_CLIENTS = 'UPDATE_CLIENTS';

const initialState = [{
    name: 'Jason Hamm',
    dateOpened: '2016-10-09T03:02:14+00:00',
    docsNeeded: 42,
    docsReceived: 16,
    phone: '801-222-3333',
    email: 'jason@hamm.com',
    dateLastReminder: '2016-10-09T03:02:14+00:00'
  },
  {
    name: 'Neely Hamm',
    dateOpened: '2016-10-09T03:02:14+00:00',
    docsNeeded: 25,
    docsReceived: 25,
    phone: '801-222-3333',
    email: 'jason@hamm.com',
    dateLastReminder: '2016-10-09T03:02:14+00:00'
  },
  {
    name: 'Aliece Hamm',
    dateOpened: '2016-10-09T03:02:14+00:00',
    docsNeeded: 25,
    docsReceived: 16,
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
