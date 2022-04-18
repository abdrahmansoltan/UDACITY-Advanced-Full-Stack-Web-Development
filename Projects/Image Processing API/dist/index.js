"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imgs_router_route_1 = __importDefault(require("./routes/imgs_router.route"));
var img_router_route_1 = __importDefault(require("./routes/img_router.route"));
var app = (0, express_1.default)();
var PORT = 3000;
app.use('/images', imgs_router_route_1.default);
app.use('/images', img_router_route_1.default);
app.listen(PORT, function () {
    console.log("server started at http://localhost:".concat(PORT, "/images"));
});
module.exports = app; // export for testing
