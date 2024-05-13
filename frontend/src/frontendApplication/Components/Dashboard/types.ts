export interface DashboardPropType {
  dashboardData: submitTypes;
}

export type submitTypes = {
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
