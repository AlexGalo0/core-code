/*https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec  */

function persistence(num) {
    var num_Cadena= num.toString() 
    var vecesProducto = 0 

    if(num_Cadena.length===1) return 0 

    num_Cadena= num_Cadena.split('') 

    //Multiplicar toda la cadena en acumulacion
    while(num_Cadena.length>1) {
        let resTemp=1 
        vecesProducto+=1 

        num_Cadena.map(function(x){
            resTemp=resTemp*x 
        })
        num_Cadena = resTemp.toString()
        num_Cadena=num_Cadena.split('')  
    }
   return vecesProducto ; 
 }
 persistence(2341) 