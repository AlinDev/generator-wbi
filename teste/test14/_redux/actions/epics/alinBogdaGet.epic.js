import { ofType } from "redux-observable";
import { alinBogdaFailure, alinBogdaSuccess, ALIN_BOGDA_API } from "../alinBogda.actions";
import { catchError, mergeMap } from "rxjs/operators";
import { from }       from "rxjs";
import { ALIN_BOGDA_QUERY } from "./queries/alin_bogda_query.gql";

export const alinBogdaGetEpic = (actions$) =>
  actions$.pipe(ofType(ALIN_BOGDA_API)).pipe(mergeMap(alinBogdaExecutionPlan));

const alinBogdaExecutionPlan = (action) =>
  from(alinBogdaPromise(action.payload))
    .pipe(mergeMap((response) => from(successActions(response))))
    .pipe(catchError((error) => from(failActions(error))));

const alinBogdaPromise = (payload) => {
  const api = api_auth_v1_factory(payload.accessToken);
  api.query({
    query: ALIN_BOGDA_QUERY,
  variables:{
      name:payload.name,
  }
  });
};

const successActions = (response) => [alinBogdaSuccess(response),hideLoading({id:"alinBogda"})];
const failActions = (error) => [alinBogdaFailure(error),hideLoading({id:"alinBogda"})];
