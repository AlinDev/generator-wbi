export const ALIN_BOGDAN_UPDATE = "ALIN_BOGDAN_UPDATE";
export const ALIN_BOGDAN_API= "ALIN_BOGDAN_API";
export const ALIN_BOGDAN_API_SUCCESS = "ALIN_BOGDAN_API_SUCCESS";
export const ALIN_BOGDAN_API_FAIL = "ALIN_BOGDAN_API_FAIL";
export const ALIN_BOGDAN_RESET = "ALIN_BOGDAN_RESET";

export const  alinBogdanUpdate = (payload) => ({
  type: ALIN_BOGDAN_UPDATE,
  payload,
});

export const  alinBogdanReset = (payload) => ({
  type: ALIN_BOGDAN_RESET,
  payload,
});

export const  alinBogdanApi = (payload) => ({
  type: ALIN_BOGDAN_API,
  payload,
});

export const alinBogdanApiSuccess = (payload) => ({
  type: ALIN_BOGDAN_API_SUCCESS,
  payload,
});

export const alinBogdanApiFailure = (payload) => ({
  type: ALIN_BOGDAN_API_FAIL,
  payload: payload,
});
