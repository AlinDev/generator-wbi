export const ALIN_BOGDA_API= "ALIN_BOGDA_API";
export const ALIN_BOGDA_SUBMIT= "ALIN_BOGDA_SUBMIT";
export const ALIN_BOGDA_UPDATE = "ALIN_BOGDA_UPDATE";
export const ALIN_BOGDA_API_SUCCESS = "ALIN_BOGDA_API_SUCCESS";
export const ALIN_BOGDA_API_FAIL = "ALIN_BOGDA_API_FAIL";
export const ALIN_BOGDA_RESET = "ALIN_BOGDA_RESET";

export const  alinBogdaUpdate = (payload) => ({
  type: ALIN_BOGDA_UPDATE,
  payload,
});

export const  alinBogdaReset = (payload) => ({
  type: ALIN_BOGDA_RESET,
  payload,
});

export const  alinBogdaApi = (payload) => ({
  type: ALIN_BOGDA_API,
  payload,
});

export const alinBogdaApiSuccess = (payload) => ({
  type: ALIN_BOGDA_API_SUCCESS,
  payload,
});

export const alinBogdaApiFailure = (payload) => ({
  type: ALIN_BOGDA_API_FAIL,
  payload: payload,
});
