import { ofType } from "redux-observable";
import { catchError, flatMap } from "rxjs/operators";
import { from } from "rxjs";
import { ACTION, nameFailure, nameSuccess } from "../_actions/name.actions.js";
import { NAME_MUTATION }                    from "../_queries/name_mutation.gql.js";

export const namePostEpic = (actions$) =>
  actions$.pipe(ofType(ACTION)).pipe(flatMap(nameExecutionPlan));

const nameExecutionPlan = (action) =>
  from(namePromise(action.payload))
    .pipe(flatMap((response) => from(successActions(response))))
    .pipe(catchError((error) => from(failActions(error))));

const namePromise = (payload) =>
  api_v1.mutate({
    mutation: NAME_MUTATION,
    variables: { registerInput: payload },
  });

const successActions = (response) => {
  return [nameSuccess(error)];
};
const failActions = (error) => {
  return [nameFailure(error)];
};
const errorDictionary = {
  "Invalid phone number": {
    screen: "Number",
    path: "number",
    message: "Invalid phone number",
  },
};
