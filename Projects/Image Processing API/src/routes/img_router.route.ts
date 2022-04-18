import express from "express";
const sharp = require("sharp");
const path = require("path");
const img_router = express.Router();

img_router.get("/:imgName", async (req, res) => {
  // getting the input-data
  const img_name: string = req.params.imgName;
  const img_width: number = parseInt(req.query.width as string);
  const img_height: number = parseInt(req.query.height as string);

  // source/distination paths
  const sourceIMG: string = path.join(
    __dirname,
    "../",
    "../",
    "images",
    `${img_name}.jpg`
  );
  const distinationIMG: string = path.join(
    __dirname,
    "../",
    "../",
    "croppedImages",
    `${img_name}-${img_width}-${img_height}.jpg`
  );

  // using Sharp to crop the image
  const imgCropper: Function = async (
    src: string,
    dist: string,
    reqWidth: number = 300, // default values
    reqHeight: number = 300 // default values
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
