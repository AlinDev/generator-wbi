export const ITEM_SERVICE_API= "ITEM_SERVICE_API";
export const ITEM_SERVICE_SUBMIT= "ITEM_SERVICE_SUBMIT";
export const ITEM_SERVICE_UPDATE = "ITEM_SERVICE_UPDATE";
export const ITEM_SERVICE_API_SUCCESS = "ITEM_SERVICE_API_SUCCESS";
export const ITEM_SERVICE_API_FAIL = "ITEM_SERVICE_API_FAIL";
export const ITEM_SERVICE_RESET = "ITEM_SERVICE_RESET";

export const  itemServiceUpdate = (payload) => ({
  type: ITEM_SERVICE_UPDATE,
  payload,
});

export const  itemServiceReset = (payload) => ({
  type: ITEM_SERVICE_RESET,
  payload,
});

export const  itemServiceApi = (payload) => ({
  type: ITEM_SERVICE_API,
  payload,
});

export const itemServiceApiSuccess = (payload) => ({
  type: ITEM_SERVICE_API_SUCCESS,
  payload,
});

export const itemServiceApiFailure = (payload) => ({
  type: ITEM_SERVICE_API_FAIL,
  payload: payload,
});
