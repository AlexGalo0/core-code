"use strict";
exports.__esModule = true;
exports.Main = void 0;
var Tile_1 = require("./Tile");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.start = function () {
        var A = new Tile_1.Tile('A', 10);
        A.printTile(); // Example of a reader-friendly format above
        /*
          ==================
            Letter: A
            Value: 10
          ==================
        */
        // const W = new Tile('W', '50'); // This should show and error
    };
    return Main;
}());
exports.Main = Main;
