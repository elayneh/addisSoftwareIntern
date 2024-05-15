import {
  SongComponentPageTypes,
  songType,
} from "../frontendApplication/Pages/AddSong/slice/types";
import { DashboardComponentPageTypes } from "../frontendApplication/Pages/DashboardPage/slice/types";
import { DeleteSongComponentPageTypes } from "../frontendApplication/Pages/DeleteSong/types";
import { FilteredSongComponentPageTypes } from "../frontendApplication/Pages/FilterSongComponentPage/slice/types";
import { UpdateSongComponentPageTypes } from "../frontendApplication/Pages/UpdateSong/types";

export interface RootState {
  songPageSliceName?: SongComponentPageTypes;
  songStateName?: songType;
  updateSongPageSliceName?: UpdateSongComponentPageTypes;
  deleteSongPageSliceName?: DeleteSongComponentPageTypes;
  dashboardPageSliceName?: DashboardComponentPageTypes;
  filteredSongPageSliceName?: FilteredSongComponentPageTypes;
}
