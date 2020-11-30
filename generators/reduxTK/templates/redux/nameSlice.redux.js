import { createSlice } from "@reduxjs/toolkit";
import { <%= Name %> } from "./<%=  name %>.model";

export const  <%= name %>Slice = createSlice( {
  name: "<%= name %>",
  initialState: <%=  Name %>,
  reducers: {
      reset:(state,action)=> <%=  Name %>,
    update: (state,{payload})=>{
      state[payload.key] = payload.value;
      state.submitted = false;
    },
    fetch:(state, )=>{
        state.submitted = true;
        state.isSuccessful = false;
    },
    success:(state,{payload})=>{
        state.isSuccessful = true;
    //state.result= payload.result
    },
    fail:(state,action)=>{
        state.isSuccessful = false;
        state.error  =  action.payload.message;
    }
  }
});

