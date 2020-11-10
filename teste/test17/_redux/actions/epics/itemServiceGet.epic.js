import { ofType } from "redux-observable";
import { itemServiceFailure, itemServiceSuccess, ITEM_SERVICE_API } from "../itemService.actions";
import { catchError, mergeMap } from "rxjs/operators";
import { from }       from "rxjs";
import { ITEM_SERVICE_QUERY } from "./queries/item_service_query.gql";

export const itemServiceGetEpic = (actions$) =>
  actions$.pipe(ofType(ITEM_SERVICE_API)).pipe(mergeMap(itemServiceExecutionPlan));

const itemServiceExecutionPlan = (action) =>
  from(itemServicePromise(action.payload))
    .pipe(mergeMap((response) => from(successActions(response))))
    .pipe(catchError((error) => from(failActions(error))));

const itemServicePromise = (payload) => {
  const api = api_auth_v1_factory(payload.accessToken);
  api.query({
    query: ITEM_SERVICE_QUERY,
  variables:{
      name:payload.name,
  }
  });
};

const successActions = (response) => [itemServiceSuccess(response),hideLoading({id:"itemService"})];
const failActions = (error) => [itemServiceFailure(error),hideLoading({id:"itemService"})];
