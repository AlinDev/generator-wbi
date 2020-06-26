import {
<%= NAME %>_SUBMIT,
  <%= NAME %>_UPDATE,
  <%= NAME %>_SUCCESS,
  <%= NAME %>_RESET,
 <%= NAME %>_FAIL
} from "../_actions/<%= name %>.actions.js";

import { <%= Name %> } from "../_models/<%= name %>.model";
const State = (data) => {
  const casted = <%= Name %>.cast(data);
  return { ...<%= Name %>.default(), ...casted };
};
export const  <%= name %>Reducer = (state = new State(), action) => {
  const { type, payload } = action;
  let newState = { ...state };
  newState.touched = { ...state.touched };
  newState.errors = { ...state.errors };
  switch ( type) {
    case <%= NAME %>_UPDATE:
      newState[payload.inputId] = payload.text;
      newState.touched[payload.inputId] = true;
      newState = validate(payload.inputId, newState,  <%= Name %>);
      newState.submitted = false;
    break;
  case <%= NAME %>_RESET:
  newState = new State();
  break;
    case <%= NAME %>_SUBMIT:
      newState.loading = true;
      newState.submitted = true;
      newState.isSuccessful = false;
  break;
    case   <%= NAME %>_SUCCESS:
      newState.isLoading = false;
      newState.isSuccessful = true;
      break;
    case <%= NAME %>_FAIL:
    newState.isLoading = false;
    newState.isSuccessful = false;
    newState.redirect = payload.screen;
    newState.errors[payload.path] = payload.message;
    newState.touched[payload.path] = true;
      break;
  }
  return newState;
};
