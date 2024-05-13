import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "../constants";
import { RootState } from "../../../../redux/RootState";

const selectSlice = (state: RootState) =>
  state?.dashboardPageSliceName || initialState;

export const selectDashboardData = createSelector(
  [selectSlice],
  (state) => state?.dashboardData
);

export const selectIsFailed = createSelector(
  [selectSlice],
  (state) => state.errorMessage
);
