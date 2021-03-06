import { ofType } from "redux-observable";
import { <%= name %>Slice  } from "./<%= name %>.slice";
import { catchError, mergeMap } from "rxjs/operators";
import { from } from "rxjs";
import { <%= NA_ME %>_MUTATION }  from "./<%= na_me %>_mutation.gql";

export const <%= name %>PostEpic = (actions$) =>
  actions$.pipe(ofType(<%= name %>Slice.actions.fetch.toString())).pipe(mergeMap(<%= name %>ExecutionPlan));

const <%= name %>ExecutionPlan = (action) =>
  from(<%= name %>Promise(action.payload))
    .pipe(mergeMap((response) => from(successActions(response))))
    .pipe(catchError((error) => from(failActions(error))));

const <%= name %>Promise = (payload) =>{
  console.log("{ <%= name %>Get.epic.js}[ <%= name %>Promise](21) payload", payload)
  const api = api_auth_v1_factory(payload.accessToken);
  return api.mutate({
    mutation: <%= NA_ME %>_MUTATION,
    variables: {
      input: "body",//payload.input
      ...payload.args,
    },
  });
}

const successActions = (response) => {
console.log("{ <%= name %>Get.epic.js}[ <%= name %>SuccessActions](21) response", response)
  return [<%= name %>Slice.actions.success(response),loadingSlice.actions.hide({id:"<%= name %>"})];
};

const failActions = (error) => {
console.log("{ <%= name %>Get.epic.js}[ <%= name %>FailActions](21) error", error)
  return [<%= name %>Slice.actions.fail(error),loadingSlice.actions.hide({id:"<%= name %>"})];
};

