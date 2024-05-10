import mongoose from "mongoose";
// import * as staticFunctions from "./statics.js";
import SongModel from "./schema.js";
import { modelNames } from "../../Utils/Constants/models.js";

// SongModel.static(staticFunctions);

const Song = mongoose.model(modelNames.songs, SongModel);
export default Song;
