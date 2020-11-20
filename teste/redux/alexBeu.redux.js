import { AlexBeu } from "./alexBeu.model";

export const  alexBeuSlice = createSlice( {
  name: "alexBeu",
  initialState: AlexBeu,
  reducers: {
    update: ()=>{
      newState[payload.inputId] = payload.text;
      newState.submitted = false;
    },
    reset:()=>{
        newState = AlexBeu;
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

export const {reset, update, api, success, fail} =alexBeuSlice.actions
export default alexBeuSlice.reducer;
