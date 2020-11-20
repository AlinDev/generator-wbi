import { T1 } from "./t1.model";

export const  t1Slice = createSlice( {
  name: "t1",
  initialState: T1,
  reducers: {
    update: ()=>{
      newState[payload.inputId] = payload.text;
      newState.submitted = false;
    },
    reset:()=>{
        newState = T1;
    },
    api:()=>{
        newState.submitted = true;
        newState.isSuccessful = false;
    },
    success:()=>{
        newState.isSuccessful = true;
    },
    fail:()=>{
        newState.isSuccessful = false;
        newState.error  =  payload.message;
    }
  }
});

export const {reset, update, api, success, fail} =t1Slice.actions
export default t1Slice.reducer;
