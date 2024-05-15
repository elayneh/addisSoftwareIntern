/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useFilteredSongPageSlice } from "./slice";
import { selectFilteredSong } from "./slice/selector";
import { FilterSongComponent } from "../../Components/FilterSongComponent";

export const FilteredSongComponentPage = () => {
  const { actions } = useFilteredSongPageSlice();
  const dispatch = useDispatch();
  const filteredSong = useSelector(selectFilteredSong);

  useEffect(() => {
    
    dispatch(actions.getFilteredSong());
  }, []);
  return <FilterSongComponent filteredSong={filteredSong} />;
};
