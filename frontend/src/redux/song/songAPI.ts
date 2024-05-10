/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { Song } from "./types";


export const uploadSongAPI = async (songData: Song) => {
  try {
    const response = await axios.post(
      `${process.env.BASE_URL}:${process.env.PORT}/addSong`,
      songData
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};
