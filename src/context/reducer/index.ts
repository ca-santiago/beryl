import { combineReducers } from "@reduxjs/toolkit";
import posts from "./posts";
import session from "./session";

const reducer = combineReducers({
  posts: posts,
  session: session,
});

export default reducer;
