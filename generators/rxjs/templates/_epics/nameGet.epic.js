import { ofType } from "redux-observable";
import { nameFailure, nameSuccess, ACTION } from "../_actions/reduxName.actions.js";
import { catchError, flatMap } from "rxjs/operators";
import { from }       from "rxjs";
import { NAME_QUERY } from "../_queries/name_query.gql.js";

export const nameGetEpic = (actions$) =>
  actions$.pipe(ofType(ACTION)).pipe(flatMap(nameExecutionPlan));

const nameExecutionPlan = (action) =>
  from(namePromise(action.payload))
    .pipe(flatMap((response) => from(successActions(response))))
    .pipe(catchError((error) => from(failActions(error))));

const namePromise = () => {
  return api_v1.query({
    query: NAME_QUERY,
  });
};

const successActions = (response) => [nameSuccess(response)];
const failActions = (error) => [nameFailure(error)];
