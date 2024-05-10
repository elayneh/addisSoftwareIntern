/* eslint-disable @typescript-eslint/no-explicit-any */
import { call, put, takeLatest, select } from "redux-saga/effects";
import { addSongRequest, addSongSuccess, addSongFailure } from "./songSlice";
import { uploadSongAPI } from "./songAPI";
import { RootState } from "../RootState";

function* uploadSong() {
  try {
    const globalState: RootState = yield select(
      (state: RootState) => state.songStateName
    );

    yield call(uploadSongAPI, globalState.songStateName);
    yield put(addSongSuccess());
  } catch (error: any) {
    yield put(addSongFailure(error.message));
  }
}

export default function* songSaga() {
  yield takeLatest(addSongRequest, uploadSong);
}
