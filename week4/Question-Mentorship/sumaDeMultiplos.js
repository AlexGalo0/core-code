function computeMultiplesSum(n) {
   

   var suma = 0 ; 

   for (let index = 2; index <=n; index++) {
       
    if(index%3==0 ||index%5==0||index%7==0) {
        suma+= index
    }
       
   }
    
    return suma 
}

computeMultiplesSum(11)