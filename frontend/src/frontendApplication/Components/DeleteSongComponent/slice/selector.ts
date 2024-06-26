import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../../redux/RootState";
import { initialState } from "../constants";

const selectSlice = (state: RootState) =>
  state?.deleteSongPageSliceName || initialState;

export const selectError = createSelector(
  [selectSlice],
  (state) => state.errorMessage
);
export const selectIsLoading = createSelector(
  [selectSlice],
  (state) => state.isLoading
);

export const selectDeleteSongId = createSelector(
  [selectSlice],
  (state) => state.deleteSongId
);

export const selectIsFailed = createSelector(
  [selectSlice],
  (state) => state.errorMessage
);
