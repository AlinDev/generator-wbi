import { ofType } from "redux-observable";
import { alinBogdanFailure, alinBogdanSuccess, ALIN_BOGDAN_API } from "../alinBogdan.actions";
import { catchError, mergeMap } from "rxjs/operators";
import { from }       from "rxjs";
import { ALIN_BOGDAN_QUERY } from "./queries/alin_bogdan_query.gql";

export const alinBogdanGetEpic = (actions$) =>
  actions$.pipe(ofType(ALIN_BOGDAN_API)).pipe(mergeMap(alinBogdanExecutionPlan));

const alinBogdanExecutionPlan = (action) =>
  from(alinBogdanPromise(action.payload))
    .pipe(mergeMap((response) => from(successActions(response))))
    .pipe(catchError((error) => from(failActions(error))));

const alinBogdanPromise = (payload) => {
  const api = api_auth_v1_factory(payload.accessToken);
  api.query({
    query: ALIN_BOGDAN_QUERY,
  variables:{
      name:payload.name,
  }
  });
};

const successActions = (response) => [alinBogdanSuccess(response),hideLoading({id:"alinBogdan"})];
const failActions = (error) => [alinBogdanFailure(error),hideLoading({id:"alinBogdan"})];
