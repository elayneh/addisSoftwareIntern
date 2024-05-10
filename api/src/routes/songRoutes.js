import express from "express";
import {
  getAllSongs,
  uploads,
  addSong,
  updateSong,
  deleteSong,
} from "../controller/songController.js";
const routes = express.Router();

routes.get("/getAllSongs", getAllSongs);
routes.post("/addSong", uploads.single("file"), addSong);
routes.patch("/update", updateSong);
routes.delete("/delete", deleteSong);
export default routes;
