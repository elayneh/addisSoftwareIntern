import { useDispatch } from "react-redux";
import { songType } from "./slice/types";
import { AudioUploader } from "../../Components/AddSongComponent";
import { useAddSongPageActions } from "./slice";

export const AddSongPage = () => {
  const dispatch = useDispatch();
  const { actions } = useAddSongPageActions();

  const handleSubmit = (values: songType) => {
    // const formData = new FormData();
    // formData.append("album", values.album);
    // formData.append("artist", values.artist);
    // formData.append("file", values.file);
    // formData.append("genre", values.genre);
    // formData.append("title", values.title);

    dispatch(actions.addSongRequest(values));
  };

  return <AudioUploader handleSubmit={handleSubmit} />;
};
