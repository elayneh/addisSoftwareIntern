export interface UpdateSongTypeProps {
  handleSubmit: (values: submitTypes) => void;
}

export type submitTypes = {
  title: string;
  album: string;
  genre: string;
  artist: string;
  songId: string;
};

export type SongComponentPageTypes = {
  isLoading: boolean;
  errorMessage: string;
  song: songType[];
};
export type songType = {
  songId: string;
  title: string;
  album: string;
  genre: string;
  artist: string;
  file: File | null;
};
