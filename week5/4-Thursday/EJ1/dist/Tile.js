"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile = void 0;
class Tile {
    constructor(letter, value) {
        this.letter = letter;
        this.value = value;
    }
    printTile() {
        console.log(`${this.letter} and ${this.value}`);
    }
}
exports.Tile = Tile;
