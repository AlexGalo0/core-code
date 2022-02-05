/*Revertirla del 5to ecaracter en adelante*/

function spinWords(string){
    //Dividir String de 5 en adelante
    
     let frase = Array.from(string) ; 
     let size = frase.length;

    //  Del caracter 5 en adelante, revertirlo

    var segundaParteFrase=frase.slice(5,size);
     //Segundo string revertirlo
     
    segundaParteFrase.reverse() ; 

    //sumarla al arreglo

    var finalArray= frase.slice(0,4).concat (segundaParteFrase ); 

    

 console.log( finalArray.toString().replace(/,/g,""));

     
     //Devolverlo en string
   }


   spinWords("Welcem")