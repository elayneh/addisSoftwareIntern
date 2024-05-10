import { Dashboard } from "../../frontendApplication/Components/Dashboard";
import NotFound from "../../frontendApplication/Components/notFound";
import { AddSongPageLoader } from "../../frontendApplication/Pages/addSong/Loadable";
import { SongPageLoader } from "../../frontendApplication/Pages/songComponentPage/loadable";
import { UpdateSongPageLoader } from "../../frontendApplication/Pages/updateSong/Loadable";
import { DeleteSongPageLoader } from "../../frontendApplication/Pages/deleteSong/Loadable";

export const allRoutes = [
  {
    path: "/dashboard",
    element: <Dashboard />,
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
    path: "/delete/:songId",
    element: <DeleteSongPageLoader />,
    errorElement: <NotFound />,
  },
];
