import { CLEAR_NEW_ACCOUNT_FORM, UPDATE_NEW_ACCOUNT_FORM_ELEMENT } from '../reducers/new.account.reducer';

export const updateNewAccountFormElement = (key, value) => {
  return {
    type: UPDATE_NEW_ACCOUNT_FORM_ELEMENT,
    key,
    value
  }
}

export const clearNewAccountForm = () => {
  return {
    type: CLEAR_NEW_ACCOUNT_FORM
  }
}
