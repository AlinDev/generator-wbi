import { ofType } from "redux-observable";
import { catchError, mergeMap } from "rxjs/operators";
import { from } from "rxjs";
import { ALIN_BOGDAN_API, alinBogdanApiFailure, alinBogdanApiSuccess } from "../alinBogdan.actions";
import { ALIN_BOGDAN_MUTATION }                    from "./queries/alin_bogdan_mutation.gql";

export const alinBogdanPostEpic = (actions$) =>
  actions$.pipe(ofType(ALIN_BOGDAN_API)).pipe(mergeMap(alinBogdanExecutionPlan));

const alinBogdanExecutionPlan = (action) =>
  from(alinBogdanPromise(action.payload))
    .pipe(mergeMap((response) => from(successActions(response))))
    .pipe(catchError((error) => from(failActions(error))));

const alinBogdanPromise = (payload) =>{
  const api = api_auth_v1_factory(payload.accessToken);
  api.mutate({
    mutation: ALIN_BOGDAN_MUTATION,
    variables: {
    input:payload.sample,
    },
  });
  }

const successActions = (response) => {
  return [alinBogdanApiSuccess(response),hideLoading({id:"alinBogdan"})];
};
const failActions = (error) => {
  return [alinBogdanApiFailure(error),hideLoading({id:"alinBogdan"})];
};

