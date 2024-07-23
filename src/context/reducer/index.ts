import { combineReducers } from "@reduxjs/toolkit";
import posts from "./posts";
import session from "./session";
import seller from "./seller";

const reducer = combineReducers({
  posts: posts,
  session: session,
  seller: seller,
});

export default reducer;
