import { combineReducers } from "redux";

import clients, * as fromClients from './clientReducer';

export default combineReducers({
  clients
});

export const getArchivedCount = (store) => {
  return fromClients.getArchivedCount(store.clients);
}
