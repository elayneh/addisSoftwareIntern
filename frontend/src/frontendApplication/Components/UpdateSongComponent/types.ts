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
