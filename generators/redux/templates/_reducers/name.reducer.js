import {
  ACTION,
  ACTION_FAIL,
  ACTION_SUCCESS,
} from "../_actions/name.actions.js";

export const nameReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTION:
      state.loading = true;
      break;
    case ACTION_SUCCESS:
      state.loading = true;
      break;
    case ACTION_FAIL:
      state.loading = true;
      break;
  }
  return state;
};
