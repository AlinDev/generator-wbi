import {
  <%= NA_ME %>_API,
  <%= NA_ME %>_UPDATE,
  <%= NA_ME %>_API_SUCCESS,
  <%= NA_ME %>_RESET,
 <%= NA_ME %>_API_FAIL
} from "../<%= name %>.actions";

import { <%= Name %> } from "./models/<%=  name %>.model";

export const  <%= name %>Reducer = (state = <%=  Name %>, action) => {
  const { type, payload } = action;
  let newState = { ...state };

  switch ( type) {
    case <%= NA_ME %>_UPDATE:
      newState[payload.inputId] = payload.text;
      newState.submitted = false;
    break;
    case <%= NA_ME %>_RESET:
      newState = <%=  Name %>;
    break;
    case <%= NA_ME %>_API:
      newState.submitted = true;
      newState.isSuccessful = false;
    break;
    case   <%= NA_ME %>_API_SUCCESS:
      newState.isSuccessful = true;
    break;
    case <%= NA_ME %>_API_FAIL:
      newState.isSuccessful = false;

      newState.error  =  payload.message;
    break;
  }
  return newState;
};
