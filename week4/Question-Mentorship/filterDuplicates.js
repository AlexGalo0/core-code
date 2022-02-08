function filterDuplicates(data) {
  let arraySinDuplicados = [];
  //Creamos un objeto vacio

  let objeto = Object.assign({}, data); //Pasamos el array  a objeto

  //Recorremos el array, viendo si hay duplicados, vamos agregando al array

  for (let i = 0; i < data.length; i++) {
    if (!objeto[i]) {
      arraySinDuplicados.push(objeto[i]);
    } else {
      continue;
    }
    console.log( arraySinDuplicados) ; 
  }
}

//Si no existe en el objeto , lo creamos, si no , lo eliminamos

filterDuplicates([3, 4, 5]);
