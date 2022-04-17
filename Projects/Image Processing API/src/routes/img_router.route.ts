import express from "express";
import fs from "fs";

const path = require("path");
const img_router = express.Router();

img_router.get("/:imgName", async (req, res) => {
  // getting the input-imgName
  const img_name = req.params.imgName;
  console.log("the image name :", img_name);

  // reading "images" folder
  const img_names = await fs.promises.readdir("images");
  console.log(img_names); // array of the images names
  const img_id = img_names.indexOf(img_name + ".jpg");

  // getting paths of the images
  const imgsPaths = img_names.map((img) => {
    return path.join(__dirname, "../", "../", "images", `${img}`);
  });

  res.sendFile(imgsPaths[img_id]);
});

export default img_router;
