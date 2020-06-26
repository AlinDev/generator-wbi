export const <%= NAME %>_SUBMIT= "<%= NAME %>_SUBMIT";
export const <%= NAME %>_UPDATE = "<%= NAME %>_UPDATE";
export const <%= NAME %>_SUCCESS = "<%= NAME %>_SUCCESS";
export const <%= NAME %>_FAIL = "<%= NAME %>_FAIL";
export const <%= NAME %>_RESET = "<%= NAME %>_RESET";

export const  <%= _name %>Reset = (payload) => ({
type: <%= NAME %>_RESET,
payload,
});

export const  <%= _name %>Submit = (payload) => ({
type: <%= NAME %>_UPDATE,
payload,
});

export const <%= _name %>Success = (payload) => ({
  type: <%= NAME %>_SUCCESS,
  payload,
});

export const <%= _name %>Failure = (payload) => ({
  type: <%= NAME %>_FAIL,
  payload: payload,
});
