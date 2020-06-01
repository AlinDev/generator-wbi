import { ofType } from "redux-observable";
import { catchError, flatMap } from "rxjs/operators";
import { from } from "rxjs";
import { <%= NAME %>_SUBMIT, nameFailure, nameSuccess } from "../_actions/reduxName.actions";
import { <%= NAME %>_MUTATION }                    from "../_queries/<%= name %>_mutation.gql";

export const namePostEpic = (actions$) =>
  actions$.pipe(ofType(<%= NAME %>_SUBMIT)).pipe(flatMap(nameExecutionPlan));

const <%= name %>ExecutionPlan = (action) =>
  from(<%= name %>Promise(action.payload))
    .pipe(flatMap((response) => from(successActions(response))))
    .pipe(catchError((error) => from(failActions(error))));

const <%= name %>Promise = (payload) =>
  api_v1.mutate({
    mutation: <%= NAME %>_MUTATION,
    variables: { registerInput: payload },
  });

const successActions = (response) => {
  return [<%= name %>Success(response)];
};
const failActions = (error) => {
  return [<%= name %>Failure(error)];
};

