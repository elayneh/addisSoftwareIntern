/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch } from "react-redux";
import { useDeleteSongPageActions } from "./slice";
import { DeleteSong } from "../../Components/DeleteSongComponent";
// import { deleteSongType } from "./types";

export const DeleteSongPage = () => {
  const dispatch = useDispatch();
  const { actions } = useDeleteSongPageActions();
  const handleSubmit = (values: any) => {
    dispatch(actions.deleteSongRequest(values));
  };

  return <DeleteSong handleSubmit={handleSubmit} />;
};
