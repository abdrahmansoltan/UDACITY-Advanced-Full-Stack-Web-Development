import express from "express";
import fs from "fs";
const path = require("path");

const app = express();
const PORT = 3000;

app.get("/images", async (req, res) => {
  const reqUrl = req.url.split("/").slice(1).join("");
  const data = await fs.promises.readdir(reqUrl);
  console.log(data); // array of the images names
  // res.send('<img src=`../images/${data[1]}`>');

  res.sendFile(path.join(__dirname, "../", "images", `${data[3]}`));
});

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}/`);
});
