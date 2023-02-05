import express from "express";
import swaggerUi from "swagger-ui-express";
import yaml from "yamljs";

const app = express();

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(yaml.load("./swagger.yml")),
);

app.get("/", (req, res) => {
  res.send("Hello World 👋");
});

export default app;
