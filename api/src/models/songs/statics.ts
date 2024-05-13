import httpStatus from "http-status"; // Import HTTP status codes
import APIError from "../../Utils/errors/APIErrorHandler";
import { modelNames } from "../../Utils/Constants/models";

export async function getNumberOfSongsPerGenre() {
  try {
    const numberOfSongsPerGenre = await this.model(modelNames.songs).aggregate([
      { $match: { active: true } },
      {
        $group: { _id: "$genre", count: { $sum: 1 } },
      },
    ]);
    return numberOfSongsPerGenre;
  } catch (error) {
    console.error("Error fetching number of songs per genre:", error);
    throw new APIError(
      "Failed to fetch number of songs per genre",
      httpStatus.INTERNAL_SERVER_ERROR
    );
  }
}
