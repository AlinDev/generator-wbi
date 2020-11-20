import { ofType } from "redux-observable";
import { api, failure, success } from "../alexBeuSlice.redux";
import { catchError, mergeMap } from "rxjs/operators";
import { from } from "rxjs";
import { ALEX_BEU_MUTATION }  from "./queries/alex_beu_mutation.gql";

export const alexBeuPostEpic = (actions$) =>
  actions$.pipe(ofType(api.toString())).pipe(mergeMap(alexBeuExecutionPlan));

const alexBeuExecutionPlan = (action) =>
  from(alexBeuPromise(action.payload))
    .pipe(mergeMap((response) => from(successActions(response))))
    .pipe(catchError((error) => from(failActions(error))));

const alexBeuPromise = (payload) =>{
  const api = api_auth_v1_factory(payload.accessToken);
  return api.mutate({
    mutation: ALEX_BEU_MUTATION,
    variables: {
    input:payload.sample,
    },
  });
  }

const successActions = (response) => {
  return [success(response),hideLoading({id:"alexBeu"})];
};
const failActions = (error) => {
  return [failure(error),hideLoading({id:"alexBeu"})];
};

