import { FilteredSongComponentPageTypes } from "./slice/types";

export const initialState: FilteredSongComponentPageTypes = {
  isLoading: false,
  errorMessage: "",
  filteredSong: [],
};
