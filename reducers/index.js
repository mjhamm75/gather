import { combineReducers } from "redux";

import clients, * as fromClients from './client.reducer';
import newAccount from './new.account.reducer';

export default combineReducers({
  clients,
  newAccount
});

export const getArchivedCount = (store) => {
  return fromClients.getArchivedCount(store.clients);
}

export const getClientCounts = (store) => {
  return fromClients.getClientCounts(store.clients);
}

export const getActiveClients = (store) => {
  return fromClients.getActiveClients(store.clients);
}
