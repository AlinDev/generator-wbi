import { ofType } from "redux-observable";
import { <%= _name %>Failure, <%= _name %>Success, <%= NAME %>_SUBMIT } from "../<%= _name %>.actions";
import { catchError, mergeMap } from "rxjs/operators";
import { from }       from "rxjs";
import { <%= NAME %>_QUERY } from "./queries/<%= _name %>_query.gql";

export const <%= _name %>GetEpic = (actions$) =>
  actions$.pipe(ofType(<%= NAME %>_SUBMIT)).pipe(mergeMap(<%= name %>ExecutionPlan));

const <%= _name %>ExecutionPlan = (action) =>
  from(<%= name %>Promise(action.payload))
    .pipe(mergeMap((response) => from(successActions(response))))
    .pipe(catchError((error) => from(failActions(error))));

const <%= _name %>Promise = (payload) => {
  return api_v1.query({
    query: <%= NAME %>_QUERY,
  variables:{
      name:payload.name,
  }
  });
};

const successActions = (response) => [<%= name %>Success(response),hideLoading({id:"<%= _name %>"})];
const failActions = (error) => [<%= _name %>Failure(error),hideLoading({id:"<%= _name %>"})];
