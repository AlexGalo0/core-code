"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const enquirer_1 = require("enquirer"); //Se importa la libreria
// Forma tipo Input (Por eso el type:'input, leer documentacion).
// El getInput es una funcion que crea el prompt.
// Remember, an async function always responds with a promise, and since we are returning an object, the promise would resolve an object.
const getInput = () => __awaiter(void 0, void 0, void 0, function* () {
    const input = yield (0, enquirer_1.prompt)({
        type: 'input',
        name: 'username',
        message: 'What is your username?'
    });
    return input; //El input que queremos sera el username, entonces, es lo que retornaremos.
});
//Form Type
const getForm = () => __awaiter(void 0, void 0, void 0, function* () {
    //La linea anterior la podemos explicar de la misma manera que la getInput, pero, en esta ocasion , el tipo de lo que devolveremos sera una Promesa, que contendra u
    const input = yield (0, enquirer_1.prompt)({
        type: 'form',
        name: 'info',
        message: 'Fill the Form.',
        choices: [
            { name: 'name', message: 'Name' },
            { name: 'lastName', message: 'lastName' },
            { name: 'age', message: 'Age' },
        ],
    });
    return input;
});
//Select
const getSelect = () => __awaiter(void 0, void 0, void 0, function* () {
    //La linea anterior la podemos explicar de la misma manera que la getInput, pero, en esta ocasion , el tipo de lo que devolveremos sera una Promesa, que contendra u
    const input = yield (0, enquirer_1.prompt)({
        type: 'select',
        name: 'option',
        message: 'Select the Option',
        choices: [
            { name: '1', message: 'Option 1' },
            { name: '2', message: 'Option 2' },
            { name: '3', message: 'Option 3' },
        ],
    });
    return Number(input.option);
});
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("====START====");
    // let input = await getInput();
    // console.log(input);
    // let form = await getForm () ; 
    // console.log(form) ; 
    let select = yield getSelect();
    console.log(select);
});
start();
