/* 
https://www.codewars.com/kata/5f77d62851f6bc0033616bd8
*/



function validSpacing(s) {
  if(s==="") return true ; 
    //'' true
    if(s===" ") return false ; 

    //Verificar si esta al principio
    if(s.charAt(0)==" ") return false ; 

    //Verificar si esta al final
    if(s.charAt(s.length-1)==" ") return false ; 
  
    //Verificar si hay espacios en toda la cadena
    const regexSpace= /\s/g ; 
    if(!regexSpace.test(s)) return true ; 
  
    //Verificar si hay doble espacio
    const regex= /\s\s+/g ; 
    if(regex.test(s)) return false ; 
  
    return true ;  //Si no se hizo ningun retorno, pasa todas las pruebas.
   
  }







validSpacing("Hola") ; 