import {
<%= NAME %>_SUBMIT,
  <%= NAME %>_UPDATE,
  <%= NAME %>_SUBMIT_SUCCESS,
  <%= NAME %>_RESET,
 <%= NAME %>_SUBMIT_FAIL
} from "../<%= name %>.actions";

import { <%= Name %> } from "./models/<%= name %>.model";
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
      newState.errors[payload.inputId] = null;
      newState = validate(payload.inputId, newState,  <%= Name %>);
      newState.submitted = false;
    break;
    case <%= NAME %>_RESET:
      newState = new State();
    break;
    case <%= NAME %>_SUBMIT:
      newState.submitted = true;
      newState.isSuccessful = false;
    break;
    case   <%= NAME %>_SUBMIT_SUCCESS:
      newState.isSuccessful = true;
    break;
    case <%= NAME %>_SUBMIT_FAIL:
      newState.isSuccessful = false;
      if(payload.screen  )newState.redirect = payload.screen;
      let path = payload?.path;
      path = path ? path : "default";
      newState.errors[path] = payload.message;
      newState.touch[path] = payload.message;
    break;
  }
  return newState;
};
