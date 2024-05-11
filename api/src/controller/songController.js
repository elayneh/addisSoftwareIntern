import Song from "./../models/songs/index.js";

import multer from "multer";
import APIError from "../Utils/errors/APIErrorHandler.js";

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
    console.log(error);
    next(
      new APIError(
        error.message || "An error occurred while process to get all songs",
        httpStatus.INTERNAL_SERVER_ERROR
      )
    );
  }
};

export const addSong = async (req, res, next) => {
  console.log("File: ", storage);
  console.log("Uploads: ", uploads);

  try {
    const songList = await Song.find({});
    if (!req.file)
      return res.status(400).json({ error: "Song file is required" });
    const { title, album, artist, genre } = req.body;
    const song = req.file.filename;
    const newSong = await Song.create({
      songId: String(songList.length + 1),
      song,
      title: title,
      artist: artist,
      album: album,
      genre: genre,
    });
    res.json(newSong);
  } catch (error) {
    console.log(error);
    next(
      new APIError(
        error.message || "An error occurred while process to add song",
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
    console.log(error);
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
