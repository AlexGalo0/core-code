/* https://www.codewars.com/kata/52774a314c2333f0a7000688 */
function validParentheses(parens) {
  var longitud = parens.length ; 
   //Recorrer Stringqq
   var parentesisIncompletos=0 ; 
    if(parens.charAt(0)===")" || parens.charAt(parens.length -1 )=== "(") return false ;  
    for(let i = 0 ; i<=longitud;i++) {
      if(parens.charAt(i) ==="(") {
       parentesisIncompletos+=1 ; 
      } else {
       if(parens.charAt(i) ===")") {
         parentesisIncompletos-=1 ; 
        }
        if(parentesisIncompletos<0) {
          return false ; 
        }
      }
      }
     return(parentesisIncompletos==0)
 }
   validParentheses("())(()")
