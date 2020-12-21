import { ofType } from "redux-observable";
import { failure, success, api } from "../alexBeuSlice.redux";
import { catchError, mergeMap } from "rxjs/operators";
import { from } from "rxjs";
import { ALEX_BEU_QUERY } from "./queries/alex_beu_query.gql";

export const alexBeuGetEpic = (actions$) =>
  actions$.pipe(ofType(get.toString())).pipe(mergeMap(alexBeuExecutionPlan));

const alexBeuExecutionPlan = (action) =>
  from(alexBeuPromise(action.payload))
    .pipe(mergeMap((response) => from(successActions(response))))
    .pipe(catchError((error) => from(failActions(error))));

const alexBeuPromise = (payload) => {
  const api = api_auth_v1_factory(payload.accessToken);
  return api.query({
    query: ALEX_BEU_QUERY,
    variables: {
      name: payload.name,
    },
  });
};

const successActions = (response) => [
  success(response),
  hideLoading({ id: "alexBeu" }),
];
const failActions = (error) => [failure(error), hideLoading({ id: "alexBeu" })];
