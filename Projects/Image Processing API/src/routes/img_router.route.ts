import express from "express";
const sharp = require("sharp");
import fs from "fs";

const path = require("path");
const img_router = express.Router();

img_router.get("/:imgName", async (req, res) => {
  // getting the input-data
  const img_name = req.params.imgName;
  console.log("the image name :", img_name);
  const img_width = parseInt(req.query.width as string);
  const img_height = parseInt(req.query.height as string);
  console.log(img_width, img_height);

  // reading "images" folder
  const img_names = await fs.promises.readdir("images");
  console.log(img_names); // array of the images names
  const img_id = img_names.indexOf(img_name + ".jpg");

  // getting paths of the images
  const imgsPaths = img_names.map((img) => {
    return path.join(__dirname, "../", "../", "images", `${img}`);
  });

  // source/distination paths
  const sourceIMG: string = imgsPaths[img_id];
  const distinationIMG: string = path.join(
    __dirname,
    "../",
    "../",
    "croppedImages",
    `${img_name}-${img_width}-${img_height}.jpg`
  );

  // using Sharp to crop the image
  const imgCropper = async (
    src: string,
    dist: string,
    reqWidth: number = 300,
    reqHeight: number = 300
  ) => {
    await sharp(src).resize(reqWidth, reqHeight).toFormat("jpeg").toFile(dist);
  };

  // Displaying the image
  if (!img_width && !img_height) {
    res.status(200).sendFile(sourceIMG);
  } else {
    await imgCropper(sourceIMG, distinationIMG, img_width, img_height);

    await res.status(200).sendFile(distinationIMG);
    // here must use "await" to make it wait for the cropping first
  }
});

export default img_router;
