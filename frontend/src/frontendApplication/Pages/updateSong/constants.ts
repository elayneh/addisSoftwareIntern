import { UpdateSongComponentPageTypes } from "./types";

export const initialState: UpdateSongComponentPageTypes = {
  isLoading: false,
  errorMessage: "",
  songToBeUpdated: {
    album: "",
    artist: "",
    genre: "",
    title: "",
    songId: ""
  }
};
