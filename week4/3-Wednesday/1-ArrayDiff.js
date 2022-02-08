function arrayDiff(a, b) {


  for (var iteradorDeA = 0; iteradorDeA <= a.length - 1; iteradorDeA++) {
    for (var iteradorDeB = 0; iteradorDeB <= b.length - 1; iteradorDeB++) {
      if (a[iteradorDeA] == b[iteradorDeB]) {
      
       
        var index= a[iteradorDeA] ; 
        
         //Eliminar de a, a[iteradorA]
             a.splice(a.indexOf(index),1) ; 
         
       
      }
    }
  }



  console.log(a)
}

var a = [1,2,2];
var b = [2];
arrayDiff(a, b);

// https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array