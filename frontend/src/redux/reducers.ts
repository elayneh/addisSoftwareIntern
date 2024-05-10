/* eslint-disable @typescript-eslint/no-explicit-any */
import { InjectedReducersType } from "./types";
import { combineReducers } from "@reduxjs/toolkit";

export const createReducer = (injectedReducers: InjectedReducersType = {}) => {
  if (Object.keys(injectedReducers).length === 0) {
    return (state: any) => state;
  } else {
    return combineReducers({ ...injectedReducers });
  }
};
