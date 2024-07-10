'use client'

import React, { PropsWithChildren } from "react";
import { AuthInfo, Post, RootAppContext } from "../types";

export const AppContext = React.createContext<RootAppContext>(undefined);

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
