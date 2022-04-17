import express from "express";

const imgs_router = express.Router();
const message: string = `
select image from the folowing:
<br>
<br>
<p>USE QUERIES TO SHOW IMAGE WITH SPECIFIC SIZE 👉 EX:
<a href="http://localhost:3000/images/encenadaport?width=200&height=200">Image with size=(200x200)</a>
</p>
<ul>
<li><a href="http://localhost:3000/images/encenadaport">encenadaport</a></li>
<li><a href="http://localhost:3000/images/fjord">fjord</a></li>
<li><a href="http://localhost:3000/images/icelandwaterfall">icelandwaterfall</a></li>
<li><a href="http://localhost:3000/images/palmtunnel">palmtunnel</a></li>
<li><a href="http://localhost:3000/images/santamonica">santamonica</a></li>
</ul>
`;

imgs_router.get("/", async (req, res) => {
  res.status(200).send(message);
});

export default imgs_router;
