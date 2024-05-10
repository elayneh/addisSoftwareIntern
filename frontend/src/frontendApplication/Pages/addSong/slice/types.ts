export interface submitSongType {
  file: File;
}

export type SongComponentPageTypes = {
  isLoading: boolean;
  errorMessage: string;
  song: songType[];
};
export type songType = {
  songId: string;
  album: string;
  artist: string;
  genre: string;
  title: string;
  file?: File | null;
};
