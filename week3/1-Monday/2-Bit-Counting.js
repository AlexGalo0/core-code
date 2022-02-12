/*https://www.codewars.com/kata/526571aae218b8ee490006f4  */

var countBits = function(n) {
    //Pasar a Binario

    var binary=  Number(n).toString(2) ; 
    //Recorrer numero y por cada uno, hacer una suma
    var cantidadDeUnos=0 ; 
    for(var i = 0 ; i<=binary.length-1;i++) {
       if(binary.charAt(i)==1) {
        cantidadDeUnos+=1 ; 
       }
    }
    return cantidadDeUnos ; 
}


countBits("6") 