function validParentheses(parens) {
   
    //Recorrer Stringqq
    var cantidadPA =0
    var cantidadPC = 0 ;  //Cantidad Parentesis Abierto y Cantidad Parentesis Cerrado
   
     if(parens.charAt(0)===")" || parens.charAt(parens.length -1 )=== "(") {
       return false ; 
     }
   
     for(parentesis in parens) {
       if(parens.charAt(parentesis) ==="(") {
        cantidadPA+=1 ; 
       } else {
         cantidadPC+=1 ; 
       }
     }

     
     return  cantidadPA==cantidadPC 
   
   
   }

   validParentheses("(())")