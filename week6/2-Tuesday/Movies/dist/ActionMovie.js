"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionMovie = void 0;
const Movie_1 = require("./Movie");
class ActionMovie extends Movie_1.Movie {
    constructor(name, director, language, releaseYear, uniqueId, runningTime, explosions, guns, martialArts) {
        super(name, director, language, releaseYear, uniqueId, runningTime);
        //Explosions,Guns,MartialArts,aumentar explosiones.
        this.explosions = 0;
        this.explosions = explosions;
        this.guns = guns;
        this.martialArts = martialArts;
    }
    // Methods
    printActionMovie() {
        console.log("IMPRIMIR DE FORMA BONITA");
    }
    incrementExplosions(explosions) {
        return explosions += 1;
    }
    expectGuns() {
        return this.guns ? '🔫' : '😒';
    }
    expectMartialArts() {
        return this.martialArts ? '🥷' : '😢';
    }
}
exports.ActionMovie = ActionMovie;
