/* eslint-disable @typescript-eslint/no-explicit-any */
import { put, takeLatest } from "redux-saga/effects";
import { filteredSongPageActions as actions } from ".";
import { AxiosError } from "axios";
import { makeCall } from "../../../API";
import { apiRoute } from "../../../../utils/routes/constants";
import { ApiResponse, filteredSongType } from "./types";
function* getFilteredSongHandler() {
  try {
    const response: ApiResponse = yield makeCall({
      route: `${apiRoute.api}${apiRoute.getFilteredSongByGenre}`,
      method: "GET",
    });
    const filteredSongs: filteredSongType[] = response.filteredSongs.map(
      (filteredSong: any) => ({
        songId: filteredSong.songId,
        title: filteredSong.title,
        album: filteredSong.album,
        artist: filteredSong.artist,
        genre: filteredSong.genre,
        file: null,
      })
    );

    yield put(actions.getFilteredSongSuccess(filteredSongs));
  } catch (error) {
    const { message } = error as unknown as AxiosError;
    yield put(actions.getFilteredSongFailed(message));
  }
}
export function* getFilteredSongPageSaga() {
  yield takeLatest(actions.getFilteredSong.type, getFilteredSongHandler);
}
