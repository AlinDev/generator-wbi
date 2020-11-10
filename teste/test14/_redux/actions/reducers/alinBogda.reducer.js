import {
  ALIN_BOGDA_API,
  ALIN_BOGDA_UPDATE,
  ALIN_BOGDA_API_SUCCESS,
  ALIN_BOGDA_RESET,
 ALIN_BOGDA_API_FAIL
} from "../alinBogda.actions";

import { AlinBogda } from "./models/alinBogda.model";

export const  alinBogdaReducer = (state = Name, action) => {
  const { type, payload } = action;
  let newState = { ...state };
  switch ( type) {
    case ALIN_BOGDA_UPDATE:
      newState[payload.inputId] = payload.text;
      newState.submitted = false;
    break;
    case ALIN_BOGDA_RESET:
      newState = Name;
    break;
    case ALIN_BOGDA_API:
      newState.submitted = true;
      newState.isSuccessful = false;
    break;
    case   ALIN_BOGDA_API_SUCCESS:
      newState.isSuccessful = true;
    break;
    case ALIN_BOGDA_API_FAIL:
      newState.isSuccessful = false;

      newState.errors = payload.message;
    break;
  }
  return newState;
};
