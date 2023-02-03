import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app";

dotenv.config();

const port = process.env.PORT || 5000;
const mongoUrl = process.env.MONGO_URL || "mongodb://localhost:27017/";

mongoose.connect(mongoUrl).then(() => {
  app.listen(port, () =>
    console.log(`Server is running at http://localhost:${port}`),
  );
});
