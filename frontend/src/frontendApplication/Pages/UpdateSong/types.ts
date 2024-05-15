export interface submitSongType {
  file: File;
}

export type UpdateSongComponentPageTypes = {
  isLoading: boolean;
  errorMessage: string;
  songToBeUpdated: updateSongType;
};
export type updateSongType = {
  songId: string;
  album: string;
  artist: string;
  genre: string;
  title: string;
};

