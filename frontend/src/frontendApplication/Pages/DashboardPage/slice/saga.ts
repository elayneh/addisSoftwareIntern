/* eslint-disable @typescript-eslint/no-explicit-any */
import { put, takeLatest } from "redux-saga/effects";
import { dashboardPageActions as actions } from ".";
import { AxiosError } from "axios";
import { makeCall } from "../../../API";
import { apiRoute } from "../../../../utils/routes/constants";
import { DashboardApiResponse, DashboardPropType } from "./types";

function* handleGetDashboard() {
  try {
    const response: DashboardApiResponse = yield makeCall({
      route: `${apiRoute.api}${apiRoute.getDashboardData}`,
      method: "GET",
    });

    const { dashboardData }: { dashboardData: DashboardPropType } = response;
    const {
      numberOfSongsAndAlbumsPerArtistData,
      numberOfSongsPerAlbumData,
      numberOfSongsPerGenre,
      totalCounts,
    } = dashboardData;

    const formattedDashboardData = {
      numberOfSongsAndAlbumsPerArtistData,
      numberOfSongsPerAlbumData,
      numberOfSongsPerGenre,
      totalCounts,
    };

    yield put(actions.getDashboardSuccess(formattedDashboardData));
  } catch (error) {
    const errorMessage = (error as AxiosError)?.message || "An error occurred";
    yield put(actions.getDashboardFailed(errorMessage));
  }
}

export function* getDashboardPageSaga() {
  yield takeLatest(actions.getDashboardRequest.type, handleGetDashboard);
}
