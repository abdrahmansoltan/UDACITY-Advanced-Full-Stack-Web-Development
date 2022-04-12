"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var strings_1 = __importDefault(require("../../utilities/strings"));
describe("Tests for string utilities", function () {
    describe("function capitalize capitalizes a string", function () {
        it("should capitalize a string", function () {
            expect(strings_1.default.capitalize("a sentence")).toEqual("A Sentence");
        });
        it("should allow sentence to remain capitalized", function () {
            expect(strings_1.default.capitalize("A Sentence")).toEqual("A Sentence");
        });
    });
});
