import {Movie} from './Movie'
export class ActionMovie extends Movie {
    //Explosions,Guns,MartialArts,aumentar explosiones.

    explosions : number=0; 
    guns: boolean ; 
    martialArts : boolean ; 

    constructor(name:string ,director:string,language:string,releaseYear:number, uniqueId:string,runningTime:number,explosions: number,guns:boolean,martialArts:boolean){
        super(name,director,language,releaseYear,uniqueId,runningTime) ;
        this.explosions=explosions ; 
        this.guns=guns ; 
        this.martialArts = martialArts ; 
    }

    // Methods
    printActionMovie() {
        console.log("IMPRIMIR DE FORMA BONITA");
    }

    incrementExplosions(explosions:number) :number {
        return explosions+=1;
    }
     
    expectGuns() : string {
      return this.guns ?  '🔫' : '😒'  ;
    }
    expectMartialArts() : string{
        return this.martialArts ? '🥷' : '😢' ;
    }

   
      
    

    



}