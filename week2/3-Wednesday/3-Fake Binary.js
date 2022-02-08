function fakeBin(x){
  
    var arreglo = Array.from(x) ; 
    var newArreglo= []; 
  
    var newString ; 
    for(i=0;i<=x.length-1;i++) {
      if(arreglo[i]<5) {
        arreglo[i]=0 ; 
      } else {
       arreglo[i]=1 ; 
      }
   
    }
   return  arreglo.toString().replace(/,/g,"")  ; 
   
   
  }