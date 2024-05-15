/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "../../../../redux/utils/toolkit";
import {
  useInjectReducer,
  useInjectSaga,
} from "../../../../redux/utils/redux-injectors";
import { initialState } from "../constants";
import { songType } from "./types";
import { addSongSaga } from "./saga";

const slice = createSlice({
  name: "songPageSliceName",
  initialState,
  reducers: {
    addSongRequest: (state, action: PayloadAction<songType>) => {
      state.isLoading = true;
      state.errorMessage = "";
      state.song.push(action.payload);
    },
    addSongSuccess: (state) => {
      state.isLoading = false;
      state.errorMessage = "";
    },
    addSongFailure: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
      state.isLoading = false;
    },
  },
});

export const { actions: addSongActions } = slice;
export const useAddSongPageActions = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: addSongSaga });
  return { actions: slice.actions };
};
