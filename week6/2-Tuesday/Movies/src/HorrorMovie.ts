import {Movie} from './Movie' 

export class HorrorMovie extends Movie{
    jumpScares: number = 0  ; 
    ghost : boolean ;
    visions : boolean ; 

    constructor(name:string,director:string,language:string,releaseYear:number,uniqueId:string,runningTime:number,jumpScares:number,ghost:boolean,visions:boolean) {
        super(name,director,language,releaseYear,uniqueId,runningTime) ;
        this.jumpScares=jumpScares ; 
        this.ghost=ghost ; 
        this.visions = visions ; 
    }

    printHorrorMovie() {
        console.log("Imprimri bonito");
    }
    incrementJumpscares(){
        this.jumpScares+=1;
    }

    expectGhost() : string {
        return this.ghost ?  '👻' : '🥱'  ;
      }
      expectVisions() : string{
        return this.visions ? '🔮' : '😶‍🌫️' ;
      }

}
