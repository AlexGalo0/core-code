/* https://www.codewars.com/kata/57ea70aa5500adfe8a000110   
    1-




*/


function foldArray(array,runs) {
    if(runs<1) return array ;

    const folded = [...array] ;
    let runsCopy = runs ; 


    while(runsCopy>0) {
        folded.map((num,numIndex,NumArr)=>{
            numIndex+1===NumArr.length ? num : NumArr[numIndex]= num+ NumArr.pop()
        })
        runsCopy--
    }
    return folded ; 
}

foldArray([1,2,3,4],1)