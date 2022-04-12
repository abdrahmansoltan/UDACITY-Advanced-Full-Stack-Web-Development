import express from "express";

const app = express();
const port = 3000;

// Add an API endpoint to get a route, then send a response to the browser
app.get("/api", (req, res) => {
  res.send("Hello, world!");
});

// Set your application to listen on your port and output a message to the console with app.listen
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}/api`);
});
