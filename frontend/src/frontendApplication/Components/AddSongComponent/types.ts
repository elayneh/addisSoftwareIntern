export interface AddSongTypeProps {
  handleSubmit: (values: submitTypes) => void;
}

export type submitTypes = {
  append(arg0: string, album: string): unknown;
  songId: string;
  title: string;
  album: string;
  genre: string;
  artist: string;
  file: File | null;
};
