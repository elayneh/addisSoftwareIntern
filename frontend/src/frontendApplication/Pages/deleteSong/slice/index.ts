/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "../../../../redux/utils/toolkit";
import {
  useInjectReducer,
  useInjectSaga,
} from "../../../../redux/utils/redux-injectors";
import { initialState } from "../constants";
import { deleteSongSaga } from "./saga";

const slice = createSlice({
  name: "deleteSongPageSliceName",
  initialState,
  reducers: {
    deleteSongRequest: (state, action: PayloadAction<string>) => {
      state.isLoading = true;
      state.deleteSongId = action.payload;
      state.errorMessage = "";
    },
    deleteSongSuccess: (state) => {
      state.isLoading = false;
      state.errorMessage = "";
    },
    deleteSongFailure: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
      state.isLoading = false;
    },
  },
});

export const { actions: updateSongActions } = slice;
export const useDeleteSongPageActions = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: deleteSongSaga });
  return { actions: slice.actions };
};
