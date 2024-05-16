/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "../../../../redux/utils/toolkit";
import {
  useInjectReducer,
  useInjectSaga,
} from "../../../../redux/utils/redux-injectors";
import { initialState } from "../constants";
import { songToBeUpdatedType } from "./types";
import { updateSongSaga } from "./saga";

const slice = createSlice({
  name: "songToBeUpdatedPageSliceName",
  initialState,
  reducers: {
    updateSongRequest: (state, action: PayloadAction<songToBeUpdatedType>) => {
      state.isLoading = true;
      state.errorMessage = "";
      state.songToBeUpdated.push(action.payload);
    },
    updateSongSuccess: (state) => {
      state.isLoading = false;
      state.errorMessage = "";
    },
    updateSongFailure: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
      state.isLoading = false;
    },
  },
});

export const { actions: updateSongActions } = slice;
export const useUpdateSongPageActions = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: updateSongSaga });
  return { actions: slice.actions };
};
