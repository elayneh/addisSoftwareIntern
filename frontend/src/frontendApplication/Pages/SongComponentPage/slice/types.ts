export interface submitSongType {
  file: File;
}

export type SongComponentPageTypes = {
  isLoading: boolean;
  errorMessage: string;
  song: songType[];
};
export type songType = {
  album: string;
  artist: string;
  genre: string;
  title: string;
  songId: string;
  file: File | null;
};

interface Song {
  _id: string;
  songId: number;
  title: string;
  artist: string;
  album: string;
}

export interface ApiResponse {
  message: string;
  songs: Song[];
}
