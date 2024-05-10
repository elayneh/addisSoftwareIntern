export interface DeleteSongTypeProps {
  handleSubmit: (values: submitTypes) => void;
}

export type submitTypes = {
  songId: string;
};
