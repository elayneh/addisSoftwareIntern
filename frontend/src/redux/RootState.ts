import {
  SongComponentPageTypes,
  songType,
} from "../frontendApplication/Pages/addSong/slice/types";
import { DashboardComponentPageTypes } from "../frontendApplication/Pages/DashboardPage/slice/types";
import { DeleteSongComponentPageTypes } from "../frontendApplication/Pages/deleteSong/types";
import { UpdateSongComponentPageTypes } from "../frontendApplication/Pages/updateSong/types";

export interface RootState {
  songPageSliceName?: SongComponentPageTypes;
  songStateName?: songType;
  updateSongPageSliceName?: UpdateSongComponentPageTypes;
  deleteSongPageSliceName?: DeleteSongComponentPageTypes;
  dashboardPageSliceName?: DashboardComponentPageTypes;
}
