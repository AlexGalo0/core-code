//https://www.codewars.com/kata/545cedaa9943f7fe7b000048

function isPangram(string){
    const alphabeth = "abcdefghijklmnopqrstuvwxyz".split(""); //Creamos el alfabeto donde guardaremos todas las letras en un array
    const otherString = string.toLowerCase().replace(/\s|\./g, "").split("");  //Quitar los spacios 
    for (let i = 0; i < alphabeth.length; i++) {
      if (!otherString.includes(alphabeth[i])) return false; //Si la frase no contiene una del alfabeto,se devuelve false 
    }
    return true;
}
isPangram("the quick brown fox jumps over the lazy dog")