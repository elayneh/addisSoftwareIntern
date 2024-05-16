import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "../constants";
import { RootState } from "../../../../redux/RootState";

const selectSlice = (state: RootState) =>
  state?.songToBeUpdatedPageSliceName || initialState;

export const selectError = createSelector(
  [selectSlice],
  (state) => state.errorMessage
);
export const selectIsLoading = createSelector(
  [selectSlice],
  (state) => state.isLoading
);

export const selectSongToBeUpdated = createSelector(
  [selectSlice],
  (state) => state.songToBeUpdated
);
