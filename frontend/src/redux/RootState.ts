import {
  SongComponentPageTypes,
  songType,
} from "../frontendApplication/Pages/addSong/slice/types";
import { DeleteSongComponentPageTypes } from "../frontendApplication/Pages/deleteSong/types";
import { updateSongType } from "../frontendApplication/Pages/updateSong/types";

export interface RootState {
  songPageSliceName?: SongComponentPageTypes;
  songStateName?: songType;
  updateSongPageSliceName?: updateSongType;
  deleteSongPageSliceName?: DeleteSongComponentPageTypes;
}
