import { ofType } from "redux-observable";
import { catchError, flatMap } from "rxjs/operators";
import { from } from "rxjs";
import { <%= NAME %>_SUBMIT, <%= name %>Failure, <%= name %>Success } from "../_actions/<%= _name %>.actions";
import { <%= NAME %>_MUTATION }                    from "../_queries/<%= _name %>_mutation.gql";

export const <%= name %>PostEpic = (actions$) =>
  actions$.pipe(ofType(<%= NAME %>_SUBMIT)).pipe(flatMap(<%= name %>ExecutionPlan));

const <%= name %>ExecutionPlan = (action) =>
  from(<%= name %>Promise(action.payload))
    .pipe(flatMap((response) => from(successActions(response))))
    .pipe(catchError((error) => from(failActions(error))));

const <%= name %>Promise = (payload) =>
  api_v1.mutate({
    mutation: <%= NAME %>_MUTATION,
    variables: { input: payload },
  });

const successActions = (response) => {
  return [<%= name %>Success(response)];
};
const failActions = (error) => {
  return [<%= name %>Failure(error)];
};

