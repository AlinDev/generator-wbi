import { ofType } from "redux-observable";
import { catchError, mergeMap } from "rxjs/operators";
import { from } from "rxjs";
import { ITEM_SERVICE_API, itemServiceApiFailure, itemServiceApiSuccess } from "../itemService.actions";
import { ITEM_SERVICE_MUTATION }                    from "./queries/item_service_mutation.gql";

export const itemServicePostEpic = (actions$) =>
  actions$.pipe(ofType(ITEM_SERVICE_API)).pipe(mergeMap(itemServiceExecutionPlan));

const itemServiceExecutionPlan = (action) =>
  from(itemServicePromise(action.payload))
    .pipe(mergeMap((response) => from(successActions(response))))
    .pipe(catchError((error) => from(failActions(error))));

const itemServicePromise = (payload) =>{
  const api = api_auth_v1_factory(payload.accessToken);
  api.mutate({
    mutation: ITEM_SERVICE_MUTATION,
    variables: {
    input:payload.sample,
  },
  });
  }

const successActions = (response) => {
  return [itemServiceApiSuccess(response),hideLoading({id:"itemService"})];
};
const failActions = (error) => {
  return [itemServiceApiFailure(error),hideLoading({id:"itemService"})];
};

