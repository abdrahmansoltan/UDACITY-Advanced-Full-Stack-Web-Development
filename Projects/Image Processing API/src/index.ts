import express from 'express';
import imgs_router from './routes/imgs_router.route';
import img_router from './routes/img_router.route';

const app = express();
const PORT: number = 3000;

app.use('/images', imgs_router);
app.use('/images', img_router);

app.listen(PORT, (): void => {
  console.log(`server started at http://localhost:${PORT}/images`);
});

module.exports = app; // export for testing
