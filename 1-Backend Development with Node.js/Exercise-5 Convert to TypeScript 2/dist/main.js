"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// Import readline module for getting input from console
// Find more here: https://nodejs.org/api/readline.html#readline_readline
var readline_1 = __importDefault(require("readline"));
// define question/output interface
var rl = readline_1.default.createInterface({
    // readable stream
    input: process.stdin,
    // writeable stream
    output: process.stdout,
});
// Create questions for STDIN Input from console.
var menuQ = function () {
    return new Promise(function (resolve, reject) {
        // (readable, writeable from readline interface)
        rl.question("Your choice: ", function (answer) {
            resolve(answer);
        });
    });
};
var milkQ = function () {
    return new Promise(function (resolve, reject) {
        try {
            rl.question("How many cups of milk to add? ", function (answer) {
                resolve(answer);
            });
        }
        catch (error) {
            reject();
        }
    });
};
var espressoQ = function () {
    return new Promise(function (resolve, reject) {
        try {
            rl.question("How many shots of espresso to add? ", function (answer) {
                resolve(answer);
            });
        }
        catch (error) {
            reject();
        }
    });
};
var peppermintQ = function () {
    return new Promise(function (resolve, reject) {
        try {
            rl.question("How many shots of peppermint to add? ", function (answer) {
                resolve(answer);
            });
        }
        catch (error) {
            reject();
        }
    });
};
// Create parent class Mocha
var Mocha = /** @class */ (function () {
    function Mocha() {
        this.milk = 1;
        this.shot = 1;
        this.chocolateType = "dark";
    }
    // list the ingredients of the mocha
    Mocha.prototype.prepare = function () {
        console.log("Your", this.chocolateType, " Chocolate Mocha Ingredients:");
        console.log(this.chocolateType, " chocolate");
        console.log("Cups of milk: ", this.milk);
        console.log("Cups of espresso: ", this.shot, "\n\n");
    };
    return Mocha;
}());
// inherits from Mocha
var WhiteChocolateMocha = /** @class */ (function (_super) {
    __extends(WhiteChocolateMocha, _super);
    function WhiteChocolateMocha() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chocolateType = "White";
        return _this;
    }
    return WhiteChocolateMocha;
}(Mocha));
// inherits from Mocha
var DarkChocolateMocha = /** @class */ (function (_super) {
    __extends(DarkChocolateMocha, _super);
    function DarkChocolateMocha() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.chocolateType = "Dark";
        return _this;
    }
    return DarkChocolateMocha;
}(Mocha));
// inherits from Mocha
var PeppermintMocha = /** @class */ (function (_super) {
    __extends(PeppermintMocha, _super);
    function PeppermintMocha() {
        var _this = 
        // include super to pull in parent constructor
        _super.call(this) || this;
        _this.peppermintSyrup = 1;
        return _this;
    }
    // Overrides Mocha prepare with additional statements
    PeppermintMocha.prototype.prepare = function () {
        console.log("Your Peppermint Mocha Ingredients:");
        console.log("Dark chocolate");
        console.log("Cups of milk: ", this.milk);
        console.log("Cups of espresso: ", this.shot);
        console.log("Pumps of peppermint: ", this.peppermintSyrup, "\n\n");
    };
    return PeppermintMocha;
}(Mocha));
// display menu and return selected menu item
var showMenu = function () { return __awaiter(void 0, void 0, void 0, function () {
    var qMenu;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Select Mocha from menu: \n", "1: Create White Chocolate Mocha \n", "2: Create Dark Chocolate Mocha \n", "3: Create Peppermint Mocha\n", "0: Exit\n");
                return [4 /*yield*/, menuQ()];
            case 1:
                qMenu = _a.sent();
                return [2 /*return*/, qMenu];
        }
    });
}); };
// User questions
// here it's <void> as it doesn't return anything it just set the choices
var userOptions = function (mochaObject) { return __awaiter(void 0, void 0, void 0, function () {
    var milkPicked, milkChoice, espPicked, espChoice, pepPicked, pepChoice;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, milkQ()];
            case 1:
                milkPicked = (_a.sent());
                milkChoice = parseInt(milkPicked);
                return [4 /*yield*/, espressoQ()];
            case 2:
                espPicked = (_a.sent());
                espChoice = parseInt(espPicked);
                if (!(mochaObject instanceof PeppermintMocha)) return [3 /*break*/, 4];
                return [4 /*yield*/, peppermintQ()];
            case 3:
                pepPicked = (_a.sent());
                pepChoice = parseInt(pepPicked);
                mochaObject.peppermintSyrup = pepChoice;
                _a.label = 4;
            case 4:
                mochaObject.milk = milkChoice;
                mochaObject.shot = espChoice;
                mochaObject.prepare();
                return [2 /*return*/];
        }
    });
}); };
var main = function () {
    var menuChoice = 0;
    var buildMocha = function () { return __awaiter(void 0, void 0, void 0, function () {
        var optionPicked, _a, whiteMocha, darkMocha, peppermintMocha;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, showMenu()];
                case 1:
                    optionPicked = (_b.sent());
                    menuChoice = parseInt(optionPicked);
                    _a = menuChoice;
                    switch (_a) {
                        case 0: return [3 /*break*/, 2];
                        case 1: return [3 /*break*/, 3];
                        case 2: return [3 /*break*/, 5];
                        case 3: return [3 /*break*/, 7];
                    }
                    return [3 /*break*/, 9];
                case 2:
                    {
                        return [3 /*break*/, 10];
                    }
                    _b.label = 3;
                case 3:
                    whiteMocha = new WhiteChocolateMocha();
                    return [4 /*yield*/, userOptions(whiteMocha)];
                case 4:
                    _b.sent();
                    return [3 /*break*/, 10];
                case 5:
                    darkMocha = new DarkChocolateMocha();
                    return [4 /*yield*/, userOptions(darkMocha)];
                case 6:
                    _b.sent();
                    return [3 /*break*/, 10];
                case 7:
                    peppermintMocha = new PeppermintMocha();
                    return [4 /*yield*/, userOptions(peppermintMocha)];
                case 8:
                    _b.sent();
                    return [3 /*break*/, 10];
                case 9:
                    {
                        console.log("Option invalid, please choose from menu.");
                        return [3 /*break*/, 10];
                    }
                    _b.label = 10;
                case 10:
                    if (menuChoice != 0) return [3 /*break*/, 0];
                    _b.label = 11;
                case 11:
                    // end readline process
                    rl.close();
                    return [2 /*return*/];
            }
        });
    }); };
    buildMocha();
};
main();
