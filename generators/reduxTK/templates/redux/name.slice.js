import { createSlice } from "@reduxjs/toolkit";
import { <%= Name %> } from "./<%=  name %>.model";

export const  <%= name %>Slice = createSlice( {
  name: "<%= name %>",
  initialState: <%=  Name %>,
  reducers: {
    reset:( )=> <%=  Name %>,
    update: (state,{payload})=>{
      state[payload.key] = payload.value;
      state.status.submitted = false;
    },
    fetch:(state, )=>{
        state.status.submitted = true;
        state.status.isSuccessful = false;
        state.status.fetching = true;
    },
    success:(state,{payload})=>{
        state.status.isSuccessful = true;
        state.status.fetching = false;
        console.log(  "{<%= name %>.slice.js}[success](19) payload", payload );
        state.result= payload.data.<%= name %>
    },
    fail:(state,action)=>{
        state.status.isSuccessful = false;
        state.status.fetching = false;
        state.status.error  =  action.payload.message;
    }
  }
});

