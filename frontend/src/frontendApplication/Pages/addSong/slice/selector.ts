import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "../constants";
import { RootState } from "../../../../redux/RootState";

const selectSlice = (state: RootState) =>
  state?.songPageSliceName || initialState;

export const selectError = createSelector(
  [selectSlice],
  (state) => state.errorMessage
);
export const selectIsLoading = createSelector(
  [selectSlice],
  (state) => state.isLoading
);

export const selectSong = createSelector([selectSlice], (state) => state.song);

export const selectIsFailed = createSelector(
  [selectSlice],
  (state) => state.errorMessage
);
