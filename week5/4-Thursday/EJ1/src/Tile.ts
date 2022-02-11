export class Tile {
    letter : string ;
    value : Number ;

    constructor(letter:string,value:Number) {
        this.letter= letter ;  
        this.value = value ; 
    }

    printTile() {
       console.log( `${this.letter} and ${this.value}`  ); 
    }

}