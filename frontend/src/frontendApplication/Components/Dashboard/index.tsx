/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { Typography } from "@mui/material";
import { DashboardPropType } from "./types";

interface AlbumData {
  label: string;
  data: number[];
}
const Dashboard = (props: DashboardPropType) => {
  const totalCtx = useRef<any>(null);

  const genreCtx = useRef<any>(null);
  const albumCtx = useRef<any>(null);
  const artistSongAlbumCtx = useRef<any>(null);
  const artistSongAlbum2Ctx = useRef<any>(null);

  const totalSongs = props.dashboardData.totalCounts.tSongs;
  const totalArtists = props.dashboardData.totalCounts.tArtists;
  const totalAlbums = props.dashboardData.totalCounts.tAlbums;
  const totalGenres = props.dashboardData.totalCounts.tGenres;
  const genreCounts = props.dashboardData.numberOfSongsPerGenre;
  const numberOfSongsPerAlbum = props.dashboardData.numberOfSongsPerAlbumData;

  const artistDataArray = Object.entries(
    props.dashboardData.numberOfSongsAndAlbumsPerArtistData
  ).map(([artistName, data]) => ({ artistName, ...data }));

  useEffect(() => {
    if (totalCtx.current && genreCtx.current && albumCtx.current) {
      const totalData = {
        labels: ["Songs", "Artists", "Albums", "Genres"],
        datasets: [
          {
            label: "Total Counts",
            data: [totalSongs, totalArtists, totalAlbums, totalGenres],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
            ],
            borderWidth: 1,
            radius: "80%",
          },
        ],
      };

      if (totalCtx.current.chart) {
        totalCtx.current.chart.destroy();
      }

      totalCtx.current.chart = new Chart(totalCtx.current, {
        type: "bar",
        data: totalData,
      });
    }
  }, []);

  useEffect(() => {
    if (genreCtx.current && genreCounts) {
      const genreLabels = genreCounts.map((genre) => genre.genre);
      const genreDataValues = genreCounts.map((genre) => genre.count);

      const genreData = {
        labels: genreLabels,
        datasets: [
          {
            label: "Total no of songs",
            data: genreDataValues,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(115, 99, 32, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 200, 192, 0.2)",
              "rgba(100, 99, 222, 0.2)",
              "rgba(20, 99, 102, 0.2)",
              "rgba(255, 155, 132, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(25, 92, 92, 1)",
              "rgba(235, 192, 192, 1)",
            ],
            borderWidth: 1,
            radius: "80%",
          },
        ],
      };

      if (genreCtx.current.chart) {
        genreCtx.current.chart.destroy();
      }

      genreCtx.current.chart = new Chart(genreCtx.current, {
        type: "pie",
        data: genreData,
      });
    }
  }, [genreCounts]);

  // # of songs and albums each artists have
  useEffect(() => {
    if (artistSongAlbumCtx.current && artistDataArray.length > 0) {
      const artistLabels = artistDataArray.map((artist) => artist.artistName);
      const artistSongs = artistDataArray.map((artist) => artist.totalSongs);
      const artistAlbums = artistDataArray.map((artist) => artist.totalAlbums);

      const artistData = {
        labels: artistLabels,
        datasets: [
          {
            label: "# of songs",
            data: artistSongs,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
          {
            label: "# of albums",
            data: artistAlbums,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      };


      if (artistSongAlbumCtx.current.chart) {
        artistSongAlbumCtx.current.chart.destroy();
      }

      artistSongAlbumCtx.current.chart = new Chart(artistSongAlbumCtx.current, {
        type: "bar",
        data: artistData,
      });
    }
  }, [artistDataArray]);

  // Total number of songs per album

  useEffect(() => {
    if (artistSongAlbum2Ctx.current) {
      const songsPerAlbumData: AlbumData[] = Object.entries(
        numberOfSongsPerAlbum
      ).map(([album, { totalSongs }]) => ({
        label: album,
        data: [totalSongs],
      }));

      if (artistSongAlbum2Ctx.current.chart) {
        artistSongAlbum2Ctx.current.chart.destroy();
      }

      artistSongAlbum2Ctx.current.chart = new Chart(
        artistSongAlbum2Ctx.current,
        {
          type: "bar",
          data: {
            labels: songsPerAlbumData.map((album) => album.label),
            datasets: [
              {
                label: "Number of Songs",
                data: songsPerAlbumData.map((album) => album.data[0]),
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: "Number of Songs",
                },
              },
              x: {
                title: {
                  display: true,
                  text: "Album",
                },
              },
            },
          },
        }
      );
    }

    return () => {
      if (artistSongAlbum2Ctx.current?.chart) {
        artistSongAlbum2Ctx.current.chart.destroy();
      }
    };
  }, []);

  ////
  return (
    <div>
      <Typography>Total Counts</Typography>
      <canvas ref={totalCtx} />
      <Typography>Number of songs per genres analysis</Typography>
      <canvas ref={genreCtx} />
      <canvas ref={albumCtx} />
      <Typography>
        Analysis for number of songs and albums an artist have.
      </Typography>
      <canvas ref={artistSongAlbumCtx} />
      <Typography>Number of songs per albums analysis</Typography>
      <canvas ref={artistSongAlbum2Ctx} />;
    </div>
  );
};

export default Dashboard;
