/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { Typography } from "@mui/material";

export const Dashboard = () => {
  const totalCtx = useRef<any>(null);
  const genreCtx = useRef<any>(null);
  const artistCtx = useRef<any>(null);
  const albumCtx = useRef<any>(null);
  const artistSongAlbumCtx = useRef<any>(null);

  const data = [100, 23, 4, 12, 20, 6, 11];
  const totalSongs = data[0];
  const totalArtists = data[1];
  const totalAlbums = data[2];
  const totalGenres = data[3];
  const genreCounts = [12, 2, 34, 56, 34, 100, 23, 4, 12, 20];
  const albumCounts = [4, 3, 5, 7, 5, 10, 11, 23, 4, 12, 7, 5, 7, 10, 11];

  const artistDataArray = [
    { artist: { artistName: "artistN", numberOfSongs: 11, numberOfAlbums: 1 } },
    { artist: { artistName: "artistN", numberOfSongs: 15, numberOfAlbums: 2 } },
    { artist: { artistName: "artistN", numberOfSongs: 16, numberOfAlbums: 3 } },
    {
      artist: { artistName: "artistN", numberOfSongs: 113, numberOfAlbums: 10 },
    },
    { artist: { artistName: "artistN", numberOfSongs: 41, numberOfAlbums: 5 } },
    { artist: { artistName: "artistN", numberOfSongs: 21, numberOfAlbums: 3 } },
    { artist: { artistName: "artistN", numberOfSongs: 31, numberOfAlbums: 4 } },
    { artist: { artistName: "artistN", numberOfSongs: 16, numberOfAlbums: 2 } },
    {
      artist: { artistName: "artistN", numberOfSongs: 100, numberOfAlbums: 15 },
    },
    { artist: { artistName: "artistN", numberOfSongs: 96, numberOfAlbums: 8 } },
  ];

  useEffect(() => {
    if (
      totalCtx.current &&
      genreCtx.current &&
      artistCtx.current &&
      albumCtx.current
    ) {
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

      const totalOptions = {
        responsive: true,
        maintainAspectRation: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                fontSize: 10,
              },
            },
          ],
          xAxes: [{ ticks: { fontSize: 10 } }],
        },
      };

      if (totalCtx.current.chart) {
        totalCtx.current.chart.destroy();
      }

      totalCtx.current.chart = new Chart(totalCtx.current, {
        type: "bar",
        data: totalData,
        options: totalOptions,
      });
    }
  }, []);

  useEffect(() => {
    if (genreCtx.current) {
      const genreData = {
        labels: [
          "Genre 1",
          "Genre 2",
          "Genre 3",
          "Genre 4",
          "Genre 5",
          "Genre 6",
          "Genre 7",
          "Genre 8",
          "Genre 9",
          "Genre 10",
        ],
        datasets: [
          {
            label: "Songs per Genre",
            data: genreCounts,
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

      const genreOptions = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };

      if (genreCtx.current.chart) {
        genreCtx.current.chart.destroy();
      }

      genreCtx.current.chart = new Chart(genreCtx.current, {
        type: "pie",
        data: genreData,
        options: genreOptions,
      });
    }
  }, [genreCounts]);

  // Songs in each album
  useEffect(() => {
    if (albumCtx.current) {
      const albumData = {
        labels: [
          "Album 1",
          "Album 2",
          "Album 3",
          "Album 4",
          "Album 5",
          "Album 6",
          "Album 7",
          "Album 8",
          "Album 9",
          "Album 10",
          "Album 11",
          "Album 12",
          "Album 13",
          "Album 14",
          "Album 15",
        ],
        datasets: [
          {
            label: "Songs per Album",
            data: albumCounts,
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

      const albumOptions = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };

      if (albumCtx.current.chart) {
        albumCtx.current.chart.destroy();
      }

      albumCtx.current.chart = new Chart(albumCtx.current, {
        type: "pie",
        data: albumData,
        options: albumOptions,
      });
    }
  }, [genreCounts]);

  // # of songs and albums each artists have
  useEffect(() => {
    if (artistSongAlbumCtx.current) {
      const artistData = {
        labels: artistDataArray.map((row) => row.artist.artistName),
        datasets: [
          {
            label: "# of songs",
            data: artistDataArray.map((row) => row.artist.numberOfSongs),
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
          {
            label: "# of albums",
            data: artistDataArray.map((row) => row.artist.numberOfAlbums),
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      };

      const artistOptions = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };

      if (artistSongAlbumCtx.current.chart) {
        artistSongAlbumCtx.current.chart.destroy();
      }

      artistSongAlbumCtx.current.chart = new Chart(artistSongAlbumCtx.current, {
        type: "bar",
        data: artistData,
        options: artistOptions,
      });
    }
  }, []);
  return (
    <div>
      <Typography>Total Counts</Typography>
      <canvas ref={totalCtx} />
      <Typography>Number of songs per genres analysis</Typography>
      <canvas ref={genreCtx} />
      <Typography>Number of songs per albums analysis</Typography>
      <canvas ref={albumCtx} />
      <Typography>
        Analysis for number of songs and albums an artist have.
      </Typography>
      <canvas ref={artistSongAlbumCtx} />
    </div>
  );
};
