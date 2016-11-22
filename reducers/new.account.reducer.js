export const UPDATE_NEW_ACCOUNT_FORM_ELEMENT = 'UPDATE_NEW_ACCOUNT_FORM_ELEMENT';

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
    default:
      return state;
  }
}
