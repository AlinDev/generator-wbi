import { ofType } from "redux-observable";
import { failure,success,api } from "../t1Slice.reducer";
import { catchError, mergeMap } from "rxjs/operators";
import { from }       from "rxjs";
import { T1_QUERY } from "./queries/t1_query.gql";

export const t1GetEpic = (actions$) =>
  actions$.pipe(ofType(get.toString()) ).pipe(mergeMap(t1ExecutionPlan));

const t1ExecutionPlan = (action) =>
  from(t1Promise(action.payload))
    .pipe(mergeMap((response) => from(successActions(response))))
    .pipe(catchError((error) => from(failActions(error))));

const t1Promise = (payload) => {
  const api = api_auth_v1_factory(payload.accessToken);
  return api.query({
    query: T1_QUERY,
    variables:{
      name:payload.name,
    }
  });
};

const successActions = (response) => [ success(response),hideLoading({id:"t1"})];
const failActions = (error) => [ failure(error),hideLoading({id:"t1"})];
