'use client'

import { Post } from "@prisma/client";
import { PostsState, ProviderPropsWithSession, SellerState } from "../types";
import AppProvider, { getDefaultSessionFromProviderProps } from "./provider";
import { _InitialSellerState } from "./reducer/seller";

type PostPageProviderProps = {
  posts: Post[];
};

const PostsPageProvider = (props: ProviderPropsWithSession<PostPageProviderProps>) => {

  const postsState: PostsState = {
    collection: props.posts,
  };

  const seller: SellerState = _InitialSellerState;

  return (
    <AppProvider
      seller={ seller }
      posts={ postsState } 
      session={ getDefaultSessionFromProviderProps(props) }
    >
      { props.children }
    </AppProvider>
  );
}

export default PostsPageProvider;
