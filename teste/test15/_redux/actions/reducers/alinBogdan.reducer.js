import {
  ALIN_BOGDAN_API,
  ALIN_BOGDAN_UPDATE,
  ALIN_BOGDAN_API_SUCCESS,
  ALIN_BOGDAN_RESET,
 ALIN_BOGDAN_API_FAIL
} from "../alinBogdan.actions";

import { AlinBogdan } from "./models/alinBogdan.model";

export const  alinBogdanReducer = (state = AlinBogdan, action) => {
  const { type, payload } = action;
  let newState = { ...state };

  let path;
  switch ( type) {
    case ALIN_BOGDAN_UPDATE:
      newState[payload.inputId] = payload.text;
      newState.submitted = false;
    break;
    case ALIN_BOGDAN_RESET:
      newState = Name;
    break;
    case ALIN_BOGDAN_API:
      newState.submitted = true;
      newState.isSuccessful = false;
    break;
    case   ALIN_BOGDAN_API_SUCCESS:
      newState.isSuccessful = true;
    break;
    case ALIN_BOGDAN_API_FAIL:
      newState.isSuccessful = false;

      newState.errors[path] = payload.message;
    break;
  }
  return newState;
};
