"use strict";
exports.__esModule = true;
exports.Tile = void 0;
var Tile = /** @class */ (function () {
    function Tile(letter, value) {
        this.letter = letter;
        this.value = value;
    }
    Tile.prototype.printTile = function () {
        console.log("".concat(this.letter, " and ").concat(this.value));
    };
    return Tile;
}());
exports.Tile = Tile;
