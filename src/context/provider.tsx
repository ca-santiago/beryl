'use client'

import React, { PropsWithChildren, useRef } from "react";
import { PostsState, ProviderPropsWithSession, SessionState } from "../types";
import { Provider } from "react-redux";
import { AppStore, makeStore } from "./store";

interface AppProviderProps {
  session: SessionState,
  posts: PostsState,
};

const AppProvider = (props: PropsWithChildren<AppProviderProps>) => {
  'use client'
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = makeStore({
      posts: props.posts,
      session: props.session,
    });
  }

  return <Provider store={ storeRef.current }>{ props.children }</Provider>
};

export default AppProvider;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getDefaultSessionFromProviderProps = (props: ProviderPropsWithSession<any>): SessionState => {
  return {
    session: props.session,
    userData: props.userData,
  };
}
