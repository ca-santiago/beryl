'use client'

import React from "react";
import { AppContext } from "./provider";

export const useAppContext = () => {
  const context = React.useContext(AppContext);

  if (context) return context;

  throw new Error('useContext should be used under AppContextProvider');
}
