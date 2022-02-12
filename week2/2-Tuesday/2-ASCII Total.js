/* 
https://www.codewars.com/kata/572b6b2772a38bc1e700007a
*/


function uniTotal (string) {
    var valueOfChar ; 
     var sumOfChars =0 ; 
    
     for (i=0;i<=string.length-1;i++ ) {
          valueOfChar = string[i].charCodeAt(0) ;
          sumOfChars = valueOfChar+  sumOfChars ;   
     }
      return sumOfChars ; 
    }