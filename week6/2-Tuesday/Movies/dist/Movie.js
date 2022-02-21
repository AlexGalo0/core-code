"use strict";
// import {v4 as uuidv4} from 'uuid'
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
class Movie {
    constructor(name, director, language, releaseYear, uniqueId, runningTime) {
        this.name = name;
        this.director = director;
        this.language = language;
        this.releaseYear = releaseYear;
        this.uniqueId = uniqueId;
        this.runningTime = runningTime;
    }
}
exports.Movie = Movie;
