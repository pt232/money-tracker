import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const port = process.env.PORT;
const mongoUrl = process.env.MONGO_URL;

app.get("/", (req, res) => {
  res.send("Hello World 👋");
});

mongoose.connect(mongoUrl).then(() => {
  app.listen(port, () =>
    console.log(`⚡️ Server is running at http://localhost:${port}`),
  );
});

export default app;
