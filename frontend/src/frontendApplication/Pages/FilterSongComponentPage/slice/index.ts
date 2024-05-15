/* eslint-disable @typescript-eslint/no-unused-vars */

import { initialState } from "../constants";
import { PayloadAction } from "@reduxjs/toolkit";
import { filteredSongType } from "./types";
import {
  useInjectReducer,
  useInjectSaga,
} from "../../../../redux/utils/redux-injectors";
import { createSlice } from "../../../../redux/utils/toolkit";
import { getFilteredSongPageSaga } from "./saga";

const slice = createSlice({
  name: "filteredSongPageSliceName",
  initialState,
  reducers: {
    getFilteredSong(state) {
      state.isLoading = true;
      state.errorMessage = "";
    },
    getFilteredSongSuccess(state, action: PayloadAction<filteredSongType[]>) {
      state.filteredSong = action.payload;
      state.isLoading = false;
    },
    getFilteredSongFailed(state, action: PayloadAction<string>) {
      state.errorMessage = action.payload;
    },
  },
});
export const { actions: filteredSongPageActions } = slice;
export const useFilteredSongPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: getFilteredSongPageSaga });
  return { actions: slice.actions };
};
