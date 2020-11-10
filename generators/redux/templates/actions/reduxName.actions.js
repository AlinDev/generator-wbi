export const <%= NA_ME %>_UPDATE = "<%= NA_ME %>_UPDATE";
export const <%= NA_ME %>_RESET = "<%= NA_ME %>_RESET";
export const <%= NA_ME %>_API= "<%= NA_ME %>_API";
export const <%= NA_ME %>_API_SUCCESS = "<%= NA_ME %>_API_SUCCESS";
export const <%= NA_ME %>_API_FAIL = "<%= NA_ME %>_API_FAIL";

export const  <%= name %>Update = (payload) => ({
  type: <%= NA_ME %>_UPDATE,
  payload,
});

export const  <%= name %>Reset = (payload) => ({
  type: <%= NA_ME %>_RESET,
  payload,
});

export const  <%= name %>Api = (payload) => ({
  type: <%= NA_ME %>_API,
  payload,
});

export const <%= name %>ApiSuccess = (payload) => ({
  type: <%= NA_ME %>_API_SUCCESS,
  payload,
});

export const <%= name %>ApiFailure = (payload) => ({
  type: <%= NA_ME %>_API_FAIL,
  payload: payload,
});
