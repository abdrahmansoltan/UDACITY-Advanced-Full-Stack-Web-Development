import path from 'path';
import imgCropper from '../../utilities/cropper';

describe('Test image cropping using Sharp', () => {
  it('should get the cropped image with the specified width and height', async () => {
    const sourceIMG: string = path.join(
      __dirname,
      '../',
      '../',
      '../',
      'images',
      'palmtunnel.jpg'
    );
    const distinationIMG: string = path.join(
      __dirname,
      '../',
      '../',
      '../',
      'croppedImages',
      'palmtunnel-200-200.jpg'
    );

    await imgCropper(sourceIMG, distinationIMG, 200, 200);

    expect(distinationIMG).toBeTruthy();
  });
});
