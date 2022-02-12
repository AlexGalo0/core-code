/* https://www.codewars.com/kata/5266876b8f4bf2da9b000362 */

function likes(names) {

    //Determinar longitudDeNames
    var cantidad = names.length ; 
    var string; 
  
    switch(cantidad)  {
  
      case 0 : 
      string = "no one likes this" ; 
      break ; 
  
      case 1: 
      string = names[0] + " likes this" ; 
      break ; 
  
      case 2: 
      string = names[0] + " and "  + names[1] + " like this" ; 
      break ; 
  
      case 3: 
      string = names[0] + ", " + names[1] + " and "  + names[2] + " like this" ; 
      break ; 
  
      default : 
      
     string = names[0]+ ", " + names[1] + " and " + (names.length-2) + " others like this"  ; 
      break ; 
    }
  
    return string ; 
  
  }