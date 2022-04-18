import express from 'express';
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const img_router = express.Router();

const errMessage: string = `
      <h2>image not found, please enter valid image from the following:</h2>
      <ul>
        <li><a href="http://localhost:3000/images/encenadaport">encenadaport</a></li>
        <li><a href="http://localhost:3000/images/fjord">fjord</a></li>
        <li><a href="http://localhost:3000/images/icelandwaterfall">icelandwaterfall</a></li>
        <li><a href="http://localhost:3000/images/palmtunnel">palmtunnel</a></li>
        <li><a href="http://localhost:3000/images/santamonica">santamonica</a></li>
      </ul>
      `;

img_router.get(
  '/:imgName',
  async (req: express.Request, res: express.Response) => {
    // getting the input-data
    const img_name: string = req.params.imgName;
    const img_width: number = parseInt(req.query.width as string);
    const img_height: number = parseInt(req.query.height as string);

    // reading "images" folder
    const img_names = await fs.promises.readdir('images'); // array of the images names

    // source/distination paths
    const sourceIMG: string = path.join(
      __dirname,
      '../',
      '../',
      'images',
      `${img_name}.jpg`
    );
    const distinationIMG: string = path.join(
      __dirname,
      '../',
      '../',
      'croppedImages',
      `${img_name}-${img_width}-${img_height}.jpg`
    );

    // using Sharp to crop the image
    const imgCropper: Function = async (
      src: string,
      dist: string,
      reqWidth: number = 300, // default values
      reqHeight: number = 300 // default values
    ) => {
      await sharp(src)
        .resize(reqWidth, reqHeight)
        .toFormat('jpeg')
        .toFile(dist);
    };

    //--------------error handling--------------//
    try {
      if (!img_names.includes(img_name + '.jpg')) throw new Error();
      // Displaying the image
      else if (!img_width && !img_height) {
        res.status(200).sendFile(sourceIMG);
      } else {
        await imgCropper(sourceIMG, distinationIMG, img_width, img_height);
        await res.status(200).sendFile(distinationIMG);
        // here must use "await" to make it wait for the cropping first
      }
    } catch (error) {
      res.status(404).send(errMessage);
    }

    //--------------without error handling--------------//
    // // Displaying the image
    // if (!img_width && !img_height) {
    //   res.status(200).sendFile(sourceIMG);
    // } else {
    //   await imgCropper(sourceIMG, distinationIMG, img_width, img_height);
    //   await res.status(200).sendFile(distinationIMG);
    //   // here must use "await" to make it wait for the cropping first
    // }
  }
);

export default img_router;
