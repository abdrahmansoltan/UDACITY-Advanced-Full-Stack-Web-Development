"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var dotenv_1 = __importDefault(require("dotenv"));
var Products_1 = __importDefault(require("./handlers/Products"));
var users_1 = __importDefault(require("./handlers/users"));
var orders_1 = __importDefault(require("./handlers/orders"));
var app = (0, express_1.default)(); // export for testing
dotenv_1.default.config(); // // initialize the environment variables
var PORT = process.env.PORT;
app.use(body_parser_1.default.json());
(0, Products_1.default)(app);
(0, users_1.default)(app);
(0, orders_1.default)(app);
app.get("/", function (req, res) {
    res.send("Hello World!");
});
app.listen(3000, function () {
    console.log("listening on port http://localhost:".concat(PORT));
});
module.exports = app;
