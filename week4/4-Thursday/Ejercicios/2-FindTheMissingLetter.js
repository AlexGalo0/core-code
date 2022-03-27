//https://www.codewars.com/kata/5839edaa6754d6fec10000a2

/* Para la resolucion de este ejercicio es importante recordar los ASCII letters */
function findMissingLetter(array) {
    const initArray = array.join("").charCodeAt(0); //Creamos el array con las palabras
 
  
    for (let i = 0; i < array.length; i++) {
      if (array.join("").charCodeAt(i) != initArray + i) //Ya ordenados , verificamos si el siguiente esta, o sea, si esta a,b,c,d,f, falta e, si no sigue (verificando con su #ASCII) ese debemos retornar
        return String.fromCharCode(initArray + i);
    }
  }
  findMissingLetter(["a","b","c","d","f"])