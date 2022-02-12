/*https://www.codewars.com/kata/520b9d2ad5c005041100000f*/

function pigIt(str) {
    var newArr=[] ; 
    var stringArray=str.split(" ") ;  //Divide en palabras

    stringArray.forEach(x => { //Recorremos todo el array
        let wordArr= x.split("") ;   //Dividimos toda la palabra
        wordArr.push(wordArr[0],'ay') ,wordArr.shift()  //el Shift elimina el primer elemento del array, dentro de la palabra, haremos un push al final, del primer caracter + 'ay'
        if(x=== "!" || x=== "?" || x=== ".") { //Signos de Exclamacion
            newArr.push(x) ; 
        } else {
            newArr.push(wordArr.join("")) ; 
        }
    });

    return newArr.join(" ") ; 

}

pigIt("hola que tal")