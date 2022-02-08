const datos = [
  {
    id: 1,
    title: "Iron Man",
    year: 2008,
  },
  {
    id: 2,
    title: "Spiderman",
    year: 2017,
  },
  {
    id: 3,
    title: "Avengers",
    year: 2019,
  },
];

// const getDatos= () =>{
//     return datos ;
// }

const getDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(datos);
    }, 1500);
  });
};

//Para usar await, tienes que usar asyinc antes, asi coo se esta usando aqui.
async function fetchingData() {
  //Se le puede añadir un try catch
  try {
    const datosFetched = await getDatos(); //Podemos esperar a que la promesa se resuelva y de ahi pasarlo a datosFetched, es una forma de decirle que hasta que este listo, cree la variable?.
    console.log(datosFetched);
  } catch (err) {
    console.log(err);
  }
}

fetchingData();

// getDatos().then((datos)=> console.log(datos)) ; //Forma mas elegante e escribirlo
