function dutyFree(normPrice, discount, hol){
    var amountBottles ; 
    
    amountBottles = hol / (normPrice * (discount/100) ) ; 
    
   return Math.trunc(amountBottles)
  
    
  }