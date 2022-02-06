function validParentheses(parens) {
   var longitud = parens.length ; 
  
    //Recorrer Stringqq
    var parentesisIncompletos=0 ; 
   
     if(parens.charAt(0)===")" || parens.charAt(parens.length -1 )=== "(") return false ; 
   
     for(let i = 0 ; i<=longitud;i++) {

       if(parens.charAt(i) ==="(") {
        parentesisIncompletos+=1 ; 
        console.log("Parentesis ( se hallo") ; 
       } else {
        if(parens.charAt(i) ===")") {
          parentesisIncompletos-=1 ; 
          console.log("Parentesis ) se hallo") ; 
         }
       }
       }
      
       console.log(parentesisIncompletos) ; 

       if(parentesisIncompletos==0) {
        return true ; 
       } else {
         return false ; 
       }

       

   
  }
   

   validParentheses("())(()")