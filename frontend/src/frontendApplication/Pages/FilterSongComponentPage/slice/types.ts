export interface submitSongType {
  file: File;
}

export type FilteredSongComponentPageTypes = {
  isLoading: boolean;
  errorMessage: string;
  filteredSong: filteredSongType[];
};
export type filteredSongType = {
  album: string;
  artist: string;
  genre: string;
  title: string;
  songId: string;
  file: File | null;
};

interface FilteredSong {
  _id: string;
  songId: number;
  title: string;
  artist: string;
  album: string;
}

export interface ApiResponse {
  message: string;
  filteredSongs: FilteredSong[];
}
