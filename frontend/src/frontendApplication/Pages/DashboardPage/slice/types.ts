export type DashboardComponentPageTypes = {
  isLoading: boolean;
  errorMessage: string;
  dashboardData: DashboardPropType;
};
export type DashboardPropType = {
  numberOfSongsPerGenre: NumberOfSongsPerGenre[];
  numberOfSongsPerAlbumData: NumberOfSongsPerAlbumData;
  numberOfSongsAndAlbumsPerArtistData: NumberOfSongsAndAlbumsPerArtistData;
  totalCounts: TotalCounts;
};


interface NumberOfSongsPerGenre {
  count: number;
  genre: string;
}

interface NumberOfSongsPerAlbumData {
  [album: string]: {
    totalSongs: number;
  };
}

interface NumberOfSongsAndAlbumsPerArtistData {
  [artist: string]: {
    totalSongs: number;
    totalAlbums: number;
  };
}

interface TotalCounts {
  tSongs: number;
  tAlbums: number;
  tGenres: number;
  tArtists: number;
}

//
interface DashboardData {
  numberOfSongsAndAlbumsPerArtistData: Record<
    string,
    { totalSongs: number; totalAlbums: number }
  >;
  numberOfSongsPerAlbumData: Record<string, { totalSongs: number }>;
  numberOfSongsPerGenre: { genre: string; count: number }[];
  totalCounts: {
    tSongs: number;
    tAlbums: number;
    tGenres: number;
    tArtists: number;
  };
}

export interface DashboardApiResponse {
  dashboardData: DashboardData;
}
