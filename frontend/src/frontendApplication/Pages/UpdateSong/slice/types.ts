export interface submitSongType {
  file: File;
}

export type UpdateSongComponentPageTypes = {
  isLoading: boolean;
  errorMessage: string;
  songToBeUpdated: songType;
};
export type songType = {
  album: string;
  artist: string;
  genre: string;
  title: string;
  songId: string;
};
