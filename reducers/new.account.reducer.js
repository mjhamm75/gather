export const UPDATE_NEW_ACCOUNT_FORM_ELEMENT = 'UPDATE_NEW_ACCOUNT_FORM_ELEMENT';
export const CLEAR_NEW_ACCOUNT_FORM = 'CLEAR_NEW_ACCOUNT_FORM';

const initialState = {
  primaryName: "",
  primaryStreet1: "",
  primaryStreet2: "",
  primaryCity: "",
  primaryState: "",
  primaryZip: "",
  primaryPhone: "",
  primaryEmail: "",

  secondaryName: "",
  secondaryStreet1: "",
  secondaryStreet2: "",
  secondaryCity: "",
  secondaryState: "",
  secondaryZip: "",
  secondaryPhone: "",
  secondaryEmail: "",

  notes: ""
}

export default (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_NEW_ACCOUNT_FORM_ELEMENT:
      return {
        ...state,
        [action.key]: action.value,
      };
    case CLEAR_NEW_ACCOUNT_FORM:
      return initialState;
    default:
      return state;
  }
}
