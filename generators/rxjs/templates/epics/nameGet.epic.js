import { ofType } from "redux-observable";
import { <%= name %>ApiFailure, <%= name %>ApiSuccess, <%= NA_ME %>_API } from "../<%= name %>.actions";
import { catchError, mergeMap } from "rxjs/operators";
import { from }       from "rxjs";
import { <%= NA_ME %>_QUERY } from "./queries/<%= na_me %>_query.gql";

export const <%= name %>GetEpic = (actions$) =>
  actions$.pipe(ofType(<%= NA_ME %>_API)).pipe(mergeMap(<%= name %>ExecutionPlan));

const <%= name %>ExecutionPlan = (action) =>
  from(<%= name %>Promise(action.payload))
    .pipe(mergeMap((response) => from(successActions(response))))
    .pipe(catchError((error) => from(failActions(error))));

const <%= name %>Promise = (payload) => {
  const api = api_auth_v1_factory(payload.accessToken);
  return api.query({
    query: <%= NA_ME %>_QUERY,
    variables:{
      name:payload.name,
    }
  });
};

const successActions = (response) => [<%= name %>ApiSuccess(response),hideLoading({id:"<%= name %>"})];
const failActions = (error) => [<%= name %>ApiFailure(error),hideLoading({id:"<%= name %>"})];
