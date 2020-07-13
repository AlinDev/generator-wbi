import { ofType } from "redux-observable";
import { catchError, flatMap } from "rxjs/operators";
import { from } from "rxjs";
import { hideLoading } from "../../_actions/loading.actions";
import { <%= NAME %>_SUBMIT, <%= _name %>Failure, <%= _name %>Success } from "../_actions/<%= _name %>.actions";
import { <%= NAME %>_MUTATION }                    from "../_queries/<%= _name %>_mutation.gql";

export const <%= _name %>PostEpic = (actions$) =>
  actions$.pipe(ofType(<%= NAME %>_SUBMIT)).pipe(flatMap(<%= name %>ExecutionPlan));

const <%= _name %>ExecutionPlan = (action) =>
  from(<%= name %>Promise(action.payload))
    .pipe(flatMap((response) => from(successActions(response))))
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

