import { createSlice } from "@reduxjs/toolkit";
import { <%= Name %> } from "./<%=  name %>.model";

export const  <%= name %>Slice = createSlice( {
  name: "<%= name %>",
  initialState: <%=  Name %>,
  reducers: {
    reset:( )=> <%=  Name %>,
    update: (state,{payload})=>{
      state[payload.key] = payload.value;
      state.submitted = false;
    },
    fetch:(state, )=>{
        state.submitted = true;
        state.isSuccessful = false;
        state.fetching = true;
    },
    success:(state,{payload})=>{
        state.isSuccessful = true;
        state.fetching = false;
    console.log(
    "{<%= name %>.slice.js}[success](19) payload",
        payload
      );
    //state.result= payload.result
    },
    fail:(state,action)=>{
        state.isSuccessful = false;
        state.fetching = false;
        state.error  =  action.payload.message;
    }
  }
});

