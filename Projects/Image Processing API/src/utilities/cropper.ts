const sharp = require('sharp');

// using Sharp to crop the image
const imgCropper: Function = async (
  src: string,
  dist: string,
  reqWidth: number = 300, // default values
  reqHeight: number = 300 // default values
): Promise<void> => {
  await sharp(src).resize(reqWidth, reqHeight).toFormat('jpeg').toFile(dist);
};

export default imgCropper;
