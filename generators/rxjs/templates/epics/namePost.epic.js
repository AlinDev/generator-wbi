import { ofType } from "redux-observable";
import { catchError, mergeMap } from "rxjs/operators";
import { from } from "rxjs";
import { <%= NAME %>_SUBMIT, <%= _name %>Failure, <%= _name %>Success } from "../<%= _name %>.actions";
import { <%= NAME %>_MUTATION }                    from "./queries/<%= _name %>_mutation.gql";

export const <%= _name %>PostEpic = (actions$) =>
  actions$.pipe(ofType(<%= NAME %>_SUBMIT)).pipe(mergeMap(<%= name %>ExecutionPlan));

const <%= _name %>ExecutionPlan = (action) =>
  from(<%= name %>Promise(action.payload))
    .pipe(mergeMap((response) => from(successActions(response))))
    .pipe(catchError((error) => from(failActions(error))));

const <%= _name %>Promise = (payload) =>
  api_v1.mutate({
    mutation: <%= NAME %>_MUTATION,
    variables: { input: payload },
  });

const successActions = (response) => {
  return [<%= name %>Success(response),hideLoading({id:"<%= _name %>"})];
};
const failActions = (error) => {
  return [<%= name %>Failure(error),hideLoading({id:"<%= _name %>"})];
};

