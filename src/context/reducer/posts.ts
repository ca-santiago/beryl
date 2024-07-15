import { Post } from "@prisma/client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostsState } from "../../types";

const postInitialState: PostsState = {
  collection: [],
}

const postsSlice = createSlice({
  initialState: postInitialState,
  name: 'posts',
  reducers: {
    addPosts(state, action: PayloadAction<Array<Post>>) {
      state.collection = action.payload;
    },
    removePost(state, action: PayloadAction<{ id: string}>) {
      state.collection = state.collection.filter(p => p.id !== action.payload.id);
    },
    init(state, action: PayloadAction<PostsState>) {
      state = action.payload;
    }
  },
});

export const { ...postsActions } = postsSlice.actions;
export default postsSlice.reducer;
