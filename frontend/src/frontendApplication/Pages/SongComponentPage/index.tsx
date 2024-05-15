/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useSongPageSlice } from "./slice";
import { selectSong } from "./slice/selector";
import { SongComponent } from "../../Components/SongListComponent";

export const SongComponentPage = () => {
  const { actions } = useSongPageSlice();
  const dispatch = useDispatch();
  const song = useSelector(selectSong);

  useEffect(() => {
    dispatch(actions.getSong());
  }, []);
  return <SongComponent song={song} />;
};
