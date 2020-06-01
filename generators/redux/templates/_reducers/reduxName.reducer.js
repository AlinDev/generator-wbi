import {
<%= NAME %>_SUBMIT,
  <%= NAME %>_UPDATE,
  <%= NAME %>_SUCCESS,
 <%= NAME %>_FAIL
} from "../_actions/<%= name %>.actions.js";

export const  <%= name %>Reducer = (state = {}, action) => {
  const {type,payload }=action;
  switch ( type) {
    case <%= NAME %>_UPDATE:
      state.loading = true;
    break;
    case <%= NAME %>_SUBMIT:
      state.loading = true;
      break;
    case   <%= NAME %>_SUCCESS:
      state.loading = true;
      break;
    case <%= NAME %>_FAIL:
      state.loading = true;
      break;
  }
  return state;
};
