import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import reducer from "./reducer";

export type AppRootState = ReturnType<typeof reducer>;

const makeStore = (st: AppRootState) => {
  return configureStore({
    reducer: reducer,
    preloadedState: st,
    devTools: process.env.NODE_ENV !== 'production',
  });
}

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];

const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatch>();

export {
  makeStore,
  useAppSelector,
  useAppDispatch,
};
