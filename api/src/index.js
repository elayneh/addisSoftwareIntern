import cors from "cors";
import dotenv from "dotenv";
import app from "./config/express.js";
import { connectDb } from "./config/mogoose.js";

dotenv.config();
const start = async () => {
  const port = process.env.PORT;
  const host = process.env.BASE_URL;

  app.options(
    cors({
      origin: "*",
    })
  );
  const server = app.listen(port, () => {
    console.log(`Server running on ${host}:${port}`);
  });
  await connectDb();
};

start();
