import express from "express";
import logger from "./utilities/logger";

const app = express();
const port = 3000;

app.get("/route1", logger, (req, res) => {
  res.send("first success!");
});
app.get("/route2", logger, (req, res) => {
  res.send("second success!");
});

// here we don't have logger but have the response
app.get("/route3", (req, res) => {
  res.send("third success!");
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
