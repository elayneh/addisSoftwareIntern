export type SongToBeUpdatedComponentPageTypes = {
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
