export function squareSum(numbers: number[]): number {
    var sumaCuadrados : number =0  ; 
     for(let i=0;i<numbers.length; i++) {
        sumaCuadrados += Math.pow(numbers[i],2) ;
     }
    
    return sumaCuadrados ; 
  }