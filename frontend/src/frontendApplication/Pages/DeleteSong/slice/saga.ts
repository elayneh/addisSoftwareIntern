/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction } from "@reduxjs/toolkit";
import { makeCall } from "../../../API";
import { apiRoute } from "../../../../utils/routes/constants";
import { AxiosError } from "axios";
import { updateSongActions as actions } from ".";
import { put, takeLatest } from "redux-saga/effects";
import { deleteSongType } from "./types";

function* handleDeleteSong(action: PayloadAction<deleteSongType>) {
  try {
    yield makeCall({
      route: `${apiRoute.api}${apiRoute.deleteSong}`,
      method: "DELETE",
      body: action.payload,
    });
    yield put(actions.deleteSongSuccess);
  } catch (error) {
    const { message } = error as unknown as AxiosError;
    yield put(actions.deleteSongFailure(message));
  }
}
export function* deleteSongSaga() {
  yield takeLatest(actions.deleteSongRequest.type, handleDeleteSong);
}
