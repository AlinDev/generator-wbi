export const ACTION = "ACTION";
export const ACTION_SUCCESS = "ACTION";
export const ACTION_FAIL = "ACTION";

export const nameSubmit = (payload) => ({
  type: ACTION,
  payload,
});

export const nameSuccess = (payload) => ({
  type: ACTION_SUCCESS,
  payload,
});

export const nameFailure = (payload) => ({
  type: ACTION_FAIL,
  payload: payload,
});
