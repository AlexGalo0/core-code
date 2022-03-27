import { prompt } from 'enquirer' //Se importa la libreria


type Form =  {
    info:{name:string;lastname:string;age:string} ;  //El info solo es una manera de organizar los datos. Recordar que para darle un tipo a la variable es nombreVariable: tipo
}

// Forma tipo Input (Por eso el type:'input, leer documentacion).

// El getInput es una funcion que crea el prompt.


// Remember, an async function always responds with a promise, and since we are returning an object, the promise would resolve an object.

const getInput = async (): Promise<{ username: string}> => { //Como sabemos que la libreria trabaja con await, necesitamos encerrar todo en un async, lo que se devolvera sera una promesa que contiene el objeto que contiene username:string.

    const input: { username: string } = await prompt({  //El valor que retornaremos sera username, de tipo string y el await prompt({}) es como se usa la libreria. Hacemos una espera de la proemsa que retornaremos la info del usuario
        type: 'input', //Tipo de prompt que va a mostrar
        name: 'username',
        message: 'What is your username?'
    });

    return input; //El input que queremos sera el username, entonces, es lo que retornaremos.
};

//Form Type
const getForm = async (): Promise<Form>  =>{
//La linea anterior la podemos explicar de la misma manera que la getInput, pero, en esta ocasion , el tipo de lo que devolveremos sera una Promesa, que contendra u
    const input:Form = await prompt({
        type: 'form', //Tipo de prompt que va a mostrar
        name: 'info',
        message: 'Fill the Form.',
        choices: [
            {name: 'name',message:'Name'} ,
            {name: 'lastName',message:'lastName'} ,
            {name: 'age', message:'Age'} ,
        ],
    });

    return input;
};

//Select
const getSelect = async (): Promise<Number>  =>{
    //La linea anterior la podemos explicar de la misma manera que la getInput, pero, en esta ocasion , el tipo de lo que devolveremos sera una Promesa, que contendra u
        const input:{option :string} = await prompt({
            type: 'select', //Tipo de prompt que va a mostrar
            name: 'option',
            message: 'Select the Option',
            choices: [
                {name: '1',message:'Option 1'} ,
                {name: '2',message:'Option 2'} ,
                {name: '3', message:'Option 3'} ,
            ],
        });
    
        return Number(input.option);
    };



const start = async () => {
    console.log("====START====");
    // let input = await getInput();
    // console.log(input);

    // let form = await getForm () ; 
    // console.log(form) ; 

    let select = await getSelect() ; 
    console.log(select) ; 


}


start(); 