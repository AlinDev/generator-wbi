import { ofType } from "redux-observable";
import { catchError, mergeMap } from "rxjs/operators";
import { from } from "rxjs";
import { <%= NA_ME %>_API, <%= name %>ApiFailure, <%= name %>ApiSuccess } from "../<%= name %>.actions";
import { <%= NA_ME %>_MUTATION }                    from "./queries/<%= na_me %>_mutation.gql";

export const <%= name %>PostEpic = (actions$) =>
  actions$.pipe(ofType(<%= NA_ME %>_API)).pipe(mergeMap(<%= name %>ExecutionPlan));

const <%= name %>ExecutionPlan = (action) =>
  from(<%= name %>Promise(action.payload))
    .pipe(mergeMap((response) => from(successActions(response))))
    .pipe(catchError((error) => from(failActions(error))));

const <%= name %>Promise = (payload) =>{
  const api = api_auth_v1_factory(payload.accessToken);
  return api.mutate({
    mutation: <%= NA_ME %>_MUTATION,
    variables: {
    input:payload.sample,
    },
  });
  }

const successActions = (response) => {
  return [<%= name %>ApiSuccess(response),hideLoading({id:"<%= name %>"})];
};
const failActions = (error) => {
  return [<%= name %>ApiFailure(error),hideLoading({id:"<%= name %>"})];
};

