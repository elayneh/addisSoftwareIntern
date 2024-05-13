/* eslint-disable @typescript-eslint/no-unused-vars */

import { initialState } from "../constants";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  useInjectReducer,
  useInjectSaga,
} from "../../../../redux/utils/redux-injectors";
import { createSlice } from "../../../../redux/utils/toolkit";
import { getDashboardPageSaga } from "./saga";
import { DashboardPropType } from "./types";

const slice = createSlice({
  name: "dashboardPageSliceName",
  initialState,
  reducers: {
    getDashboardRequest(state) {
      state.isLoading = true;
      state.errorMessage = "";
    },
    getDashboardSuccess(state, action: PayloadAction<DashboardPropType>) {
      state.dashboardData = action.payload;
      state.isLoading = false;
    },
    getDashboardFailed(state, action: PayloadAction<string>) {
      state.errorMessage = action.payload;
    },
  },
});

export const { actions: loginPageActions } = slice;
export const useDashboardPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: getDashboardPageSaga });
  return { actions: slice.actions };
};
