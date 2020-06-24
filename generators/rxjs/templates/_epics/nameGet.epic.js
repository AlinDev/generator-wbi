import { ofType } from "redux-observable";
import { <%= _name %>Failure, <%= _name %>Success, <%= NAME %>_SUBMIT } from "../_actions/<%= _name %>.actions";
import { catchError, flatMap } from "rxjs/operators";
import { from }       from "rxjs";
import { <%= NAME %>_QUERY } from "../_queries/<%= _name %>_query.gql";

export const <%= _name %>GetEpic = (actions$) =>
  actions$.pipe(ofType(<%= NAME %>_SUBMIT)).pipe(flatMap(<%= name %>ExecutionPlan));

const <%= _name %>ExecutionPlan = (action) =>
  from(<%= name %>Promise(action.payload))
    .pipe(flatMap((response) => from(successActions(response))))
    .pipe(catchError((error) => from(failActions(error))));

const <%= _name %>Promise = () => {
  return api_v1.query({
    query: <%= NAME %>_QUERY,
  });
};

const successActions = (response) => [<%= name %>Success(response)];
const failActions = (error) => [<%= _name %>Failure(error)];
