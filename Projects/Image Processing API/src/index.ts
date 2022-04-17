import express from "express";
import imgs_router from "./routes/imgs_router.route";
import img_router from "./routes/img_router.route";


const app = express();
const PORT = 3000;

app.use("/images", imgs_router);
app.use("/images", img_router);

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}/`);
});

// images names :
// [
//   encenadaport
//   fjord
//   icelandwaterfall
//   palmtunnel
//   santamonica
// ];
