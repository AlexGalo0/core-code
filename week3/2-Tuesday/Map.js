/* Crear un nuevo array con los resultados de la llamada a la funcion. */

const numeros =  [1,2,3,4,5] ; 

// const multiplicados = numeros.map(x=>x*2) ; 

// console.log(multiplicados) ; 

/* Map hace que a x el cual es el iterador, se le multiplique por 2 */


const parejas  = numeros.map(x=>[x,x])
console.log(parejas);