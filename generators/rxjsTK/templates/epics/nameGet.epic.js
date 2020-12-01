import { ofType } from "redux-observable";
import { <%= name %>Slice } from "../<%= name %>.redux";
import { catchError, mergeMap } from "rxjs/operators";
import { from }       from "rxjs";
import { <%= NA_ME %>_QUERY } from "./queries/<%= na_me %>_query.gql";

export const <%= name %>GetEpic = (actions$) =>
  actions$.pipe(ofType(<%= name %>Slice.actions.fetch.toString()) ).pipe(mergeMap(<%= name %>ExecutionPlan));

const <%= name %>ExecutionPlan = (action) =>
  from(<%= name %>Promise(action.payload))
    .pipe(mergeMap((response) => from(successActions(response))))
    .pipe(catchError((error) => from(failActions(error))));

const <%= name %>Promise = (payload) => {
  const api = api_auth_v1_factory(payload.accessToken);
  return api.query({
    query: <%= NA_ME %>_QUERY,
    variables:{
      input:payload.input,
    }
  });
};

const successActions = (response) => {
  console.log("{ <%= name %>Get.epic.js}[ <%= name %>successActions](21) payload", payload)
  return [<%= name %>Slice.actions.success(response),hideLoading({id:"<%= name %>"})];
};

const failActions = (error) => {
  console.log("{ <%= name %>Get.epic.js}[ <%= name %>failActions](21) payload", payload)
  return [<%= name %>Slice.actions.fail(error),hideLoading({id:"<%= name %>"})];
};
