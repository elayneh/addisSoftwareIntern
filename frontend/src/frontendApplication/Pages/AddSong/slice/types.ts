export interface submitSongType {
  file: File;
}

export type SongComponentPageTypes = {
  isLoading: boolean;
  errorMessage: string;
  song: songType;
};
export type songType = {
  songId: string;
  title: string;
  album: string;
  genre: string;
  artist: string;
  file: File | null;
};
