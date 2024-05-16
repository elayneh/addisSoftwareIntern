import { PayloadAction } from "@reduxjs/toolkit";
import { makeCall } from "../../../API";
import { apiRoute } from "../../../../utils/routes/constants";
import { AxiosError } from "axios";
import { updateSongActions as actions } from ".";
import { put, takeLatest } from "redux-saga/effects";
import { songToBeUpdatedType } from "../types";

function* handleUpdateSong(action: PayloadAction<songToBeUpdatedType>) {
  try {
    yield makeCall({
      route: `${apiRoute.api}${apiRoute.updateSong}`,
      method: "PATCH",
      body: action.payload,
    });
    yield put(actions.updateSongSuccess());
  } catch (error) {
    const { message } = error as unknown as AxiosError;
    yield put(actions.updateSongFailure(message));
  }
}
export function* updateSongSaga() {
  yield takeLatest(actions.updateSongRequest.type, handleUpdateSong);
}
