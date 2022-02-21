// import {v4 as uuidv4} from 'uuid'

export class Movie {
    // unique id, name, director, language, running time and a release year.
    name: string ;
    director:string;
    language: string;
    releaseYear:number;
    uniqueId: string 
    runningTime:number ; 

    constructor(name:string,director:string,language:string,releaseYear:number,uniqueId:string,runningTime:number) {
        this.name=name ; 
        this.director=director ; 
        this.language= language ; 
        this.releaseYear= releaseYear ; 
        this.uniqueId = uniqueId ; 
        this.runningTime=runningTime ; 
    }


}