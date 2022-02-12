/* 
https://www.codewars.com/kata/57e92e91b63b6cbac20001e5
*/

function dutyFree(normPrice, discount, hol){
    var amountBottles ; 
    
    amountBottles = hol / (normPrice * (discount/100) ) ; 
    
   return Math.trunc(amountBottles)
  
    
  }