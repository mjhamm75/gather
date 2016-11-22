import UPDATE_CLIENTS from '../reducers/client.reducer';

export getClients = () => {
  return {
    type: UPDATE_CLIENTS
  }
}

export getArchivedCount = () => {
  return (dispatch, getState) => {
    return {
      archived: getState().clients.filter(client => client.archived === true)
    }
  }
}
