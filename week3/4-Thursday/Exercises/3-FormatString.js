/* https://www.codewars.com/kata/53368a47e38700bd8300030d/train/javascript*/

function list(names){
    if(names.length === 0) return ''; // Si no hay ningun nombre 
    let result = names[0].name; // Guardamos el primer nombre
    for(let i = 1, l = names.length; i < l; i++){
        i + 1 === l ? result += ' & ' + names[i].name : result += ', ' + names[i].name 
        /*
        1- Si i ya es el ultimo nombre, se agrega el  & + the last name    
        */ 
    }
    return result;
}
console.log(list([{name:'Alex'}]));