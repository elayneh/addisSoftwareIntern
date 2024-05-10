import { Schema } from "mongoose";

const SongModel = new Schema(
  {
    songId: { type: Number },
    title: { type: String, required: [true, "Song title is required"] },
    artist: { type: String, default: "Unknown artist" },
    album: { type: String, default: "Unknown album" },
    genre: { type: String, default: "Unknown genre" },
    song: {
      type: String,
      required: [true, "Please enter the song."],
    },
    active: { type: Boolean, default: true, select: false },
  },
  { timestamps: true }
);

SongModel.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });
  next();
});
export default SongModel;
