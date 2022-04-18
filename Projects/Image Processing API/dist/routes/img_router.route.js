"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cropper_1 = __importDefault(require("../utilities/cropper"));
var path = require('path');
var fs = require('fs');
var img_router = express_1.default.Router();
var errMessage = "\n      <h2>image not found, please enter valid image from the following:</h2>\n      <ul>\n        <li><a href=\"http://localhost:3000/images/encenadaport\">encenadaport</a></li>\n        <li><a href=\"http://localhost:3000/images/fjord\">fjord</a></li>\n        <li><a href=\"http://localhost:3000/images/icelandwaterfall\">icelandwaterfall</a></li>\n        <li><a href=\"http://localhost:3000/images/palmtunnel\">palmtunnel</a></li>\n        <li><a href=\"http://localhost:3000/images/santamonica\">santamonica</a></li>\n      </ul>\n      ";
img_router.get('/:imgName', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var img_name, img_width, img_height, img_names, sourceIMG, distinationIMG, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                img_name = req.params.imgName;
                img_width = parseInt(req.query.width);
                img_height = parseInt(req.query.height);
                return [4 /*yield*/, fs.promises.readdir('images')];
            case 1:
                img_names = _a.sent();
                sourceIMG = path.join(__dirname, '../', '../', 'images', "".concat(img_name, ".jpg"));
                distinationIMG = path.join(__dirname, '../', '../', 'croppedImages', "".concat(img_name, "-").concat(img_width, "-").concat(img_height, ".jpg"));
                _a.label = 2;
            case 2:
                _a.trys.push([2, 8, , 9]);
                if (!!img_names.includes(img_name + '.jpg')) return [3 /*break*/, 3];
                throw new Error();
            case 3:
                if (!(!img_width && !img_height)) return [3 /*break*/, 4];
                res.status(200).sendFile(sourceIMG);
                return [3 /*break*/, 7];
            case 4: return [4 /*yield*/, (0, cropper_1.default)(sourceIMG, distinationIMG, img_width, img_height)];
            case 5:
                _a.sent();
                return [4 /*yield*/, res.status(200).sendFile(distinationIMG)];
            case 6:
                _a.sent();
                _a.label = 7;
            case 7: return [3 /*break*/, 9];
            case 8:
                error_1 = _a.sent();
                res.status(404).send(errMessage);
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); });
exports.default = img_router;
