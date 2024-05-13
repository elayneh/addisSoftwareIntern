import { PayloadAction } from "@reduxjs/toolkit";
import { makeCall } from "../../../API";
import { apiRoute } from "../../../../utils/routes/constants";
import { AxiosError } from "axios";
import { addSongActions as actions } from ".";
import { put, takeLatest } from "redux-saga/effects";
import { songType } from "../../addSong/slice/types";

function* handleAddSong(action: PayloadAction<songType>) {
  try {
    const payload = new FormData();
    payload.append("album", action.payload.album);
    payload.append("artist", action.payload.artist);
    payload.append("genre", action.payload.genre);
    payload.append("title", action.payload.title);

    if (action.payload.file !== null) {
      payload.append("file", action.payload.file);
    }
    yield makeCall({
      route: `${apiRoute.api}${apiRoute.addSong}`,
      method: "POST",
      body: payload,
    });
    yield put(actions.addSongSuccess());
  } catch (error) {
    const { message } = error as unknown as AxiosError;
    yield put(actions.addSongFailure(message));
  }
}
export function* addSongSaga() {
  yield takeLatest(actions.addSongRequest.type, handleAddSong);
}
