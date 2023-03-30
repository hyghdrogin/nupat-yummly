import express from "express";
import cors from "cors";
import config from "./configuration/index.js";
import requestLogger from "./utilities/requestLogger.js";
import router from "./routes/index.js";

const app = express();
const port = config.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.use("/api", router);
app.get("/", (req, res) => {
  res.send(`Welcome to ${config.APP_NAME}`);
});

app.use((req, res) => res.status(404).send({
  "error": "Wrong Route",
  "message": "Invalid Route, Kindly check and revisit"
}));

app.listen(port, () => {
  console.log(`${config.APP_NAME} is listening on Port: ${config.PORT}`);
});
