import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World 👋");
});

app.listen(port, () =>
  console.log(`⚡️ [server] Server is running at http://localhost:${port}`),
);
