/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch } from "react-redux";
import { useUpdateSongPageActions } from "./slice";
import { UpdateSong } from "../../Components/UpdateSongComponent";
import { updateSongType } from "./types";

export const UpdateSongPage = () => {
  const dispatch = useDispatch();
  const { actions } = useUpdateSongPageActions();
  const handleSubmit = (values: updateSongType) => {

    dispatch(actions.updateSongRequest(values));
  };

  return <UpdateSong handleSubmit={handleSubmit} />;
};
