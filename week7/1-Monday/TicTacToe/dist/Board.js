"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
class Board {
    // private  rows:number=3
    // private  columns:number=3
    constructor(rows = 3, columns = 3) {
        this.rows = rows;
        this.columns = columns;
        this.tablero = [][];
        this.xGhost = '👻';
        this.xPumpkin = '🎃';
    }
    initialiceMatrix() {
    }
    clearMatrix() {
    }
}
exports.Board = Board;
