import express from "express";

const imgs_router = express.Router();
const message: string = `
select image from the folowing:
<br>
<ul>
<li><a href="http://localhost:3000/images/encenadaport">encenadaport</a></li>
<li><a href="http://localhost:3000/images/fjord">fjord</a></li>
<li><a href="http://localhost:3000/images/icelandwaterfall">icelandwaterfall</a></li>
<li><a href="http://localhost:3000/images/palmtunnel">palmtunnel</a></li>
<li><a href="http://localhost:3000/images/santamonica">santamonica</a></li>
</ul>
`;

imgs_router.get("/", async (req, res) => {
  res.send(message);
});

export default imgs_router;
