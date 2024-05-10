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
