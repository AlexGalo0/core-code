/* 
https://www.codewars.com/kata/57faece99610ced690000165
*/


function remove (string) {  
    arreglo= Array.from(string); 

    //Llegar al final del arreglo
    arrayLastPosition = arreglo[arreglo.length-1] ; 

    console.log(arreglo) ; 


    //Verificar si es !, si no, retornar la misma cadena
    while(arrayLastPosition==="!") {
        arreglo.pop() ; 
        arrayLastPosition = arreglo[arreglo.length-1] ; 
    }
 
   

   var newString = arreglo.join("") ; 
  console.log(newString) ; 

    
}




remove("hi!")