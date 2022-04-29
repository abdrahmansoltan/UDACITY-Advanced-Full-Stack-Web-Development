"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var Products_1 = __importDefault(require("./handlers/Products"));
var app = (0, express_1["default"])();
var PORT = 3000;
app.use(body_parser_1["default"].json());
(0, Products_1["default"])(app);
app.get("/", function (req, res) {
    res.send("Hello World!");
});
app.listen(3000, function () {
    console.log("listening on port http://localhost:".concat(PORT));
});
