"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var port = 3000;
// Add an API endpoint to get a route, then send a response to the browser
app.get("/api", function (req, res) {
    res.send("Hello, world!");
});
// Set your application to listen on your port and output a message to the console with app.listen
app.listen(port, function () {
    console.log("server started at http://localhost:" + port + "/api");
});
