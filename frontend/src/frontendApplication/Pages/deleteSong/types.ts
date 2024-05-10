export interface submitSongType {
  file: File;
}

export type DeleteSongComponentPageTypes = {
  isLoading: boolean;
  errorMessage: string;
  songToBeUpdated: deleteSongType;
};
export type deleteSongType = {
  songId: string;
};
