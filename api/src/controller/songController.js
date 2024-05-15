import { Song } from "./../models/songs/index.js";
import multer from "multer";
import APIError from "../Utils/errors/APIErrorHandler.js";
import httpStatus from "http-status";
import { randomBytes } from "crypto";

const generateRandomNumberString = (length) => {
  const randomString = randomBytes(length).toString("hex");
  return randomString.replace(/\D/g, "").slice(0, length);
};

const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
export const uploads = multer({
  storage: storage,
});

export const getAllSongs = async (req, res, next) => {
  try {
    const songs = await Song.find({}).sort({ updatedAt: -1 });
    res.status(200).json({ message: "song sent successful", songs });
  } catch (error) {
    next(
      new APIError(
        error.message || "An error occurred while process to get all songs",
        httpStatus.INTERNAL_SERVER_ERROR
      )
    );
  }
};

export const filterSongByGenre = async (req, res, next) => {
  try {
    const { genre } = req.query;

    if (!genre) {
      res.json({ error: "No song found" });
    }

    const genreRegex = new RegExp(genre, "i");

    const filteredSongs = await Song.find({ genre: { $regex: genreRegex } });
    const rankedSongs = filteredSongs.map((song) => {
      const matchingCharacters = [...song.genre].filter((char) =>
        genre.includes(char)
      ).length;
      return { song, score: matchingCharacters };
    });
    rankedSongs.sort((a, b) => b.score - a.score);
    const sortedSongs = rankedSongs.map((item) => item.song);

    res.json({ sortedSongs });
  } catch (error) {
    next(
      new APIError(
        error.message || "An error occurred while filtering songs by genre",
        httpStatus.INTERNAL_SERVER_ERROR
      )
    );
  }
};



export const addSong = async (req, res, next) => {
  try {
    if (!req.file)
      return res.status(400).json({ error: "Song file is required" });

    const { title, album, artist, genre } = req.body;
    const song = req.file.filename;

    let songId;
    let isUnique = false;

    while (!isUnique) {
      songId = generateRandomNumberString(10);
      const existingSong = await Song.findOne({ songId });
      if (!existingSong) {
        isUnique = true;
      }
    }

    const newSong = await Song.create({
      songId,
      song,
      title,
      artist,
      album,
      genre,
    });

    res.json(newSong);
  } catch (error) {
    next(
      new APIError(
        error.message || "An error occurred while processing to add song",
        httpStatus.INTERNAL_SERVER_ERROR
      )
    );
  }
};


export const updateSong = async (req, res, next) => {
  const { songId, title, album, artist, genre } = req.body;
  try {
    const updatedSong = await Song.findOneAndUpdate(
      { songId: songId },
      { title, album, artist, genre },
      { new: true }
    );

    if (!updatedSong) {
      return res.status(404).json({ message: "Song not found" });
    }

    return res
      .status(200)
      .json({ message: "Song updated successfully", updatedSong });
  } catch (error) {
    next(
      new APIError(
        error.message || "An error occurred while process to update the song",
        httpStatus.INTERNAL_SERVER_ERROR
      )
    );
  }
};

export const deleteSong = async (req, res, next) => {
  try {
    const { songId } = req.body;
    const deletedSong = await Song.findOneAndDelete({
      songId: songId,
    });
    res.json({ deletedSong });
  } catch (error) {
    console.log(error);
    next(
      new APIError(
        error.message || "An error occurred while process to update the song",
        httpStatus.INTERNAL_SERVER_ERROR
      )
    );
  }
};

export const getDashboardData = async (req, res, next) => {
  try {
    const totalCounts = await Song.aggregate([
      {
        $facet: {
          tSongs: [
            { $match: { song: { $exists: true, $ne: "" } } },
            { $count: "count" },
          ],
          tAlbums: [
            { $match: { album: { $exists: true, $ne: "" } } },
            { $group: { _id: "$album" } },
            { $count: "count" },
          ],
          tGenres: [
            { $match: { genre: { $exists: true, $ne: "" } } },
            { $group: { _id: "$genre" } },
            { $count: "count" },
          ],
          tArtists: [
            { $match: { artist: { $exists: true, $ne: "" } } },
            { $group: { _id: "$artist" } },
            { $count: "count" },
          ],
        },
      },
      {
        $project: {
          // totalCounts: {
          tSongs: { $arrayElemAt: ["$tSongs.count", 0] },
          tAlbums: { $arrayElemAt: ["$tAlbums.count", 0] },
          tGenres: { $arrayElemAt: ["$tGenres.count", 0] },
          tArtists: { $arrayElemAt: ["$tArtists.count", 0] },
          // },
        },
      },
    ]);

    const numberOfSongsPerGenre = await Song.aggregate([
      { $match: { active: true } },
      { $group: { _id: "$genre", count: { $sum: 1 } } },
      { $project: { genre: "$_id", count: 1, _id: 0 } },
    ]);

    const artistCounts = await Song.aggregate([
      {
        $group: {
          _id: "$artist",
          totalSongs: { $sum: 1 },
          totalAlbums: { $addToSet: "$album" },
        },
      },
      {
        $project: {
          _id: 0,
          artist: "$_id",
          totalSongs: 1,
          totalAlbums: { $size: "$totalAlbums" },
        },
      },
    ]);

    const formattedCounts = {};
    artistCounts.forEach((artistCount) => {
      formattedCounts[artistCount.artist] = {
        totalSongs: artistCount.totalSongs,
        totalAlbums: artistCount.totalAlbums,
      };
    });

    const songsPerAlbum = await Song.aggregate([
      { $group: { _id: "$album", totalSongs: { $sum: 1 } } },
    ]);

    const numberOfSongsPerAlbum = {};
    songsPerAlbum.forEach((album) => {
      numberOfSongsPerAlbum[album._id] = {
        totalSongs: album.totalSongs,
      };
    });

    res.json({
      dashboardData: {
        totalCounts: totalCounts[0],
        numberOfSongsPerAlbumData: numberOfSongsPerAlbum,
        numberOfSongsAndAlbumsPerArtistData: formattedCounts,
        numberOfSongsPerGenre,
      },
    });
  } catch (error) {
    next(
      new APIError(
        error.message || "An error occurred while processing dashboard data",
        httpStatus.INTERNAL_SERVER_ERROR
      )
    );
  }
};
