'use client'

import React from 'react';
import { RootAppContext } from '../types';

export const AppContext = React.createContext<RootAppContext>(undefined);

export const useAppContext = () => {
  const context = React.useContext(AppContext);

  if (context) return context;

  throw new Error('useContext should be used under AppContextProvider');
}
