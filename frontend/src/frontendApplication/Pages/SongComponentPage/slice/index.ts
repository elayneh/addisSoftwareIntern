/* eslint-disable @typescript-eslint/no-unused-vars */

import { initialState } from "../constants";
import { PayloadAction } from "@reduxjs/toolkit";
import { songType } from "./types";
import {
  useInjectReducer,
  useInjectSaga,
} from "../../../../redux/utils/redux-injectors";
import { createSlice } from "../../../../redux/utils/toolkit";
import { getSongPageSaga } from "./saga";

const slice = createSlice({
  name: "songPageSliceName",
  initialState,
  reducers: {
    getSong(state) {
      state.isLoading = true;
      state.errorMessage = "";
    },
    getSongSuccess(state, action: PayloadAction<songType[]>) {
      state.song = action.payload;
      state.isLoading = false;
    },
    getSongFailed(state, action: PayloadAction<string>) {
      state.errorMessage = action.payload;
    },
  },
});

export const { actions: songPageActions } = slice;
export const useSongPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: getSongPageSaga });
  return { actions: slice.actions };
};
