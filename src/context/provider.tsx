'use client'

import React, { PropsWithChildren, useRef } from "react";
import { Post, PostsState, ProviderPropsWithSession, SellerState, SessionState } from "../types";
import { Provider } from "react-redux";
import { AppRootState, AppStore, makeStore } from "./store";
import { Product } from "@prisma/client";
import { _InitialSellerState } from "./reducer/seller";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getDefaultSessionFromProviderProps = (props: ProviderPropsWithSession<any>): SessionState => {
  return {
    session: props.session,
    userData: props.userData,
  };
}

const AppProvider = (props: PropsWithChildren<AppRootState>) => {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = makeStore({
      posts: props.posts,
      session: props.session,
      seller: props.seller,
    });
  }

  return <Provider store={ storeRef.current }>{ props.children }</Provider>
};

type PostPageProviderProps = {
  posts: Post[];
};

const PostsPageProvider = (props: ProviderPropsWithSession<PostPageProviderProps>) => {

  const postsState: PostsState = {
    collection: props.posts,
  };

  return (
    <AppProvider
      seller={ _InitialSellerState }
      posts={ postsState } 
      session={ getDefaultSessionFromProviderProps(props) }
    >
      { props.children }
    </AppProvider>
  );
}

interface SellerPageProviderProps {
  products: Array<Product>;
}

const SellerPageProvider = (props: ProviderPropsWithSession<SellerPageProviderProps>) => {
  const sellerState: SellerState = {
    products: {
      collection: props.products,
    },
  };

  return (
    <AppProvider
      seller={ sellerState }
      posts={ { collection: [] } }
      session={ getDefaultSessionFromProviderProps(props) }
    >
      { props.children }
    </AppProvider>
  );
}

export default AppProvider;
export {
  PostsPageProvider,
  SellerPageProvider,
}
