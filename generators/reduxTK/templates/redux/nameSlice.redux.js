import { <%= Name %> } from "./<%=  name %>.model";

const  <%= name %>Slice = createSlice( {
  name: "<%= name %>",
  initialState: <%=  Name %>,
  reducers: {
    update: (state,action)=>{
      state[action.payload.key] = action.payload.value;
      state.submitted = false;
    },
    reset:(state,action)=>{
        state = <%=  Name %>;
    },
  fetch:(state,action)=>{
        state.submitted = true;
        state.isSuccessful = false;
    },
    success:(state,action)=>{
        state.isSuccessful = true;
    },
    fail:(state,action)=>{
        state.isSuccessful = false;
        state.error  =  action.payload.message;
    }
  }
});

const {reset, update, fetch, success, fail} =<%= name %>Slice.actions;
const  <%= name %>Reducer = <%= name %>Slice.reducer;
export   {<%= name %>Slice,<%= name %>Reducer,reset, update, api, success, fail}

