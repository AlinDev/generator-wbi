import { ofType } from "redux-observable";
import { catchError, mergeMap } from "rxjs/operators";
import { from } from "rxjs";
import { ALIN_BOGDA_API, alinBogdaFailure, alinBogdaSuccess } from "../alinBogda.actions";
import { ALIN_BOGDA_MUTATION }                    from "./queries/alin_bogda_mutation.gql";

export const alinBogdaPostEpic = (actions$) =>
  actions$.pipe(ofType(ALIN_BOGDA_API)).pipe(mergeMap(alinBogdaExecutionPlan));

const alinBogdaExecutionPlan = (action) =>
  from(alinBogdaPromise(action.payload))
    .pipe(mergeMap((response) => from(successActions(response))))
    .pipe(catchError((error) => from(failActions(error))));

const alinBogdaPromise = (payload) =>{
  const api = api_auth_v1_factory(payload.accessToken);
  api.mutate({
    mutation: ALIN_BOGDA_MUTATION,
    variables: {
    input:payload.sample,
  },
  });
  }

const successActions = (response) => {
  return [alinBogdaSuccess(response),hideLoading({id:"alinBogda"})];
};
const failActions = (error) => {
  return [alinBogdaFailure(error),hideLoading({id:"alinBogda"})];
};

