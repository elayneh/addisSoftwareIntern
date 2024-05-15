import NotFound from "../../frontendApplication/Components/NotFound";
import { SongPageLoader } from "../../frontendApplication/Pages/SongComponentPage/loadable";
import { UpdateSongPageLoader } from "../../frontendApplication/Pages/UpdateSong/Loadable";
import { DeleteSongPageLoader } from "../../frontendApplication/Pages/DeleteSong/Loadable";
import { DashboardPageLoader } from "../../frontendApplication/Pages/DashboardPage/loadable";
import { AddSongPageLoader } from "../../frontendApplication/Pages/AddSong/Loadable";
import { FilteredSongPageLoader } from "../../frontendApplication/Pages/FilterSongComponentPage/loadable";

export const allRoutes = [
  {
    path: "/dashboard",
    element: <DashboardPageLoader />,
    errorElement: <NotFound />,
  },
  {
    path: "/create",
    element: <AddSongPageLoader />,
    errorElement: <NotFound />,
  },
  {
    path: "/update/:songId",
    element: <UpdateSongPageLoader />,
    errorElement: <NotFound />,
  },
  {
    path: "/songlist",
    element: <SongPageLoader />,
    errorElement: <NotFound />,
  },
  {
    path: "/filter/:filterQuery",
    element: <FilteredSongPageLoader />,
    errorElement: <NotFound />,
  },
  {
    path: "/delete/:songId",
    element: <DeleteSongPageLoader />,
    errorElement: <NotFound />,
  },
];
