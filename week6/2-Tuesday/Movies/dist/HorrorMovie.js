"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HorrorMovie = void 0;
const Movie_1 = require("./Movie");
class HorrorMovie extends Movie_1.Movie {
    constructor(name, director, language, releaseYear, uniqueId, runningTime, jumpScares, ghost, visions) {
        super(name, director, language, releaseYear, uniqueId, runningTime);
        this.jumpScares = 0;
        this.jumpScares = jumpScares;
        this.ghost = ghost;
        this.visions = visions;
    }
    printHorrorMovie() {
        console.log("Imprimri bonito");
    }
    incrementJumpscares() {
        this.jumpScares += 1;
    }
    expectGhost() {
        return this.ghost ? '👻' : '🥱';
    }
    expectVisions() {
        return this.visions ? '🔮' : '😶‍🌫️';
    }
}
exports.HorrorMovie = HorrorMovie;
