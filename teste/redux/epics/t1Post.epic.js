import { ofType } from "redux-observable";
import { api, failure, success } from "../t1Slice.reducer";
import { catchError, mergeMap } from "rxjs/operators";
import { from } from "rxjs";
import { T1_MUTATION }    from "./queries/t1_mutation.gql";

export const t1PostEpic = (actions$) =>
  actions$.pipe(ofType(api.toString())).pipe(mergeMap(t1ExecutionPlan));

const t1ExecutionPlan = (action) =>
  from(t1Promise(action.payload))
    .pipe(mergeMap((response) => from(successActions(response))))
    .pipe(catchError((error) => from(failActions(error))));

const t1Promise = (payload) =>{
  const api = api_auth_v1_factory(payload.accessToken);
  return api.mutate({
    mutation: T1_MUTATION,
    variables: {
    input:payload.sample,
    },
  });
  }

const successActions = (response) => {
  return [t1success(response),hideLoading({id:"t1"})];
};
const failActions = (error) => {
  return [t1failure(error),hideLoading({id:"t1"})];
};

