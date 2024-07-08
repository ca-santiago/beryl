'use client'

import { PropsWithChildren } from "react";
import { AppContext } from ".";
import { AuthInfo, Post, RootAppContext } from "../types";

interface AppContextProviderProps {
  auth: AuthInfo;
  posts: Array<Post>;
}

export const AppContextProvider = (props: PropsWithChildren<AppContextProviderProps>) => {
  const initialContext: RootAppContext = {
    auth: props.auth,
    posts: {
      collection: props.posts
    },
  };

  return (
    <AppContext.Provider
      value={ initialContext } 
    >
      { props.children }
    </AppContext.Provider>
  );
}