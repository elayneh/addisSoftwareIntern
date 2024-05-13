/* eslint-disable @typescript-eslint/no-explicit-any */
// import { DashboardComponentPageTypes } from "./slice/types";

import { DashboardComponentPageTypes } from "./slice/types";

export const initialState: DashboardComponentPageTypes = {
  isLoading: false,
  errorMessage: "",
  dashboardData: {
    numberOfSongsPerGenre: [],
    numberOfSongsPerAlbumData: { album: { totalSongs: 0 } },
    numberOfSongsAndAlbumsPerArtistData: {
      artist: {
        totalSongs: 0,
        totalAlbums: 0,
      },
    },
    totalCounts: {
      tSongs: 0,
      tAlbums: 0,
      tGenres: 0,
      tArtists: 0,
    },
  },
};
