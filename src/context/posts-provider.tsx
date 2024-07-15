'use client'

import { Post } from "@prisma/client";
import { PostsState, ProviderPropsWithSession } from "../types";
import AppProvider, { getDefaultSessionFromProviderProps } from "./provider";

type PostPageProviderProps = {
  posts: Post[];
};

const PostsPageProvider = (props: ProviderPropsWithSession<PostPageProviderProps>) => {

  const postsState: PostsState = {
    collection: props.posts,
  };

  return (
    <AppProvider
      posts={ postsState } 
      session={ getDefaultSessionFromProviderProps(props) }
    >
      { props.children }
    </AppProvider>
  );
}

export default PostsPageProvider;
