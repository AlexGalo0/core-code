function arrayDiff(a, b) {
  return a.filter((num) => !b.includes(num))
  /* 
    Dentro de a, filtraremos 
    todos los numeros que no esten incluidos en b.
  */

    /* 
    Otra manera de solucionarlo
    function array_diff(a, b) {
  b = new Set(b)
  return a.filter(v => !b.has(v))
}
    */
}

//   for (let iteradorDeB = 0; iteradorDeB <= b.length -1; iteradorDeB++) {
//     for (let iteradorDeA = 0; iteradorDeA <= a.length ; iteradorDeA++) {
//       if (a[iteradorDeA] == b[iteradorDeB]) {
//         let index = a[iteradorDeA];
//         //Eliminar de a, a[iteradorA]
//         a.splice(a.indexOf(index), 1);
//       }
//     }
//   }
//   console.log(a)
// }

var a = [1, 2, 2];
var b = [2];
arrayDiff(a, b);

// https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
