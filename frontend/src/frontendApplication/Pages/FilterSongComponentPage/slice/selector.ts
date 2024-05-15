import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "../constants";
import { RootState } from "../../../../redux/RootState";

const selectSlice = (state: RootState) =>
  state?.filteredSongPageSliceName || initialState;

export const selectFilteredSong = createSelector(
  [selectSlice],
  (state) => state.filteredSong
);

export const selectIsFailed = createSelector(
  [selectSlice],
  (state) => state.errorMessage
);
