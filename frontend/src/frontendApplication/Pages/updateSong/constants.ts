import { UpdateSongComponentPageTypes } from "./slice/types";

export const initialState: UpdateSongComponentPageTypes = {
  isLoading: false,
  errorMessage: "",
  songToBeUpdated: {
    album: "",
    artist: "",
    genre: "",
    title: "",
  }
};
