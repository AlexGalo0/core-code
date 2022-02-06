function order(words){

    if(words=="") return false ;  //Si la palabra esta vacia

    var array = words.split('') ;  //Dividir la palabra en arreglos
   
    var objetoTemporal = {} ; 
    //Obtencion de orden
    for(var element of array) {
        var number = getNumber(element) ; //Obtendremos el numero de la RegEx
        objetoTemporal[number] = element ;  //En Objeto Temporal, en la posicion numero colocaremos el elemento
    }
    //Concatenacion
    return Object.values(objetoTemporal).join(' ') ; 

}

function getNumber(s) {
    console.log(s);
    //El metodo match retorna si se encuentra la expresion regular
    return s.match(/\d/)[0] ; 
}


order("Dan1el S5o Al1x") ; 