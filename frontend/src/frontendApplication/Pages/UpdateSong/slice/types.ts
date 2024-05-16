export interface submitSongType {
  file: File;
}

export type UpdatedSongComponentPageTypes = {
  isLoading: boolean;
  errorMessage: string;
  songToBeUpdated: songToBeUpdatedType[];
};
export type songToBeUpdatedType = {
  songId: string;
  title: string;
  album: string;
  genre: string;
  artist: string;
};
