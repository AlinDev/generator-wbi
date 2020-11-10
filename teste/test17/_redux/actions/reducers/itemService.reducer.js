import {
  ITEM_SERVICE_API,
  ITEM_SERVICE_UPDATE,
  ITEM_SERVICE_API_SUCCESS,
  ITEM_SERVICE_RESET,
 ITEM_SERVICE_API_FAIL
} from "../itemService.actions";

import { ItemService } from "./models/itemService.model";

export const  itemServiceReducer = (state = ItemService, action) => {
  const { type, payload } = action;
  let newState = { ...state };

  let path;
  switch ( type) {
    case ITEM_SERVICE_UPDATE:
      newState[payload.inputId] = payload.text;
      newState.submitted = false;
    break;
    case ITEM_SERVICE_RESET:
      newState = Name;
    break;
    case ITEM_SERVICE_API:
      newState.submitted = true;
      newState.isSuccessful = false;
    break;
    case   ITEM_SERVICE_API_SUCCESS:
      newState.isSuccessful = true;
    break;
    case ITEM_SERVICE_API_FAIL:
      newState.isSuccessful = false;

      newState.error  =  payload.message;
    break;
  }
  return newState;
};
