/* eslint-disable @typescript-eslint/no-explicit-any */
import { put, takeLatest } from "redux-saga/effects";
import { loginPageActions as actions } from ".";
import { AxiosError } from "axios";
import { makeCall } from "../../../API";
import { apiRoute } from "../../../../utils/routes/constants";
import { ApiResponse, songType } from "./types";
function* handleGetSong() {
  try {
    const response: ApiResponse = yield makeCall({
      route: `${apiRoute.api}${apiRoute.getSong}`,
      method: "GET",
    });
    const filteredSongs: songType[] = response.songs.map((song: any) => ({
      songId: song.songId,
      title: song.title,
      album: song.album,
      artist: song.artist,
      genre: song.genre,
      file: null,
    }));

    yield put(actions.getSongSuccess(filteredSongs));
  } catch (error) {
    const { message } = error as unknown as AxiosError;
    yield put(actions.getSongFailed(message));
  }
}
export function* getSongPageSaga() {
  yield takeLatest(actions.getSong.type, handleGetSong);
}
