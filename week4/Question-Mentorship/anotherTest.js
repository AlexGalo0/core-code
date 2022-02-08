// var arrTwo=["Hello 1 "," Hello 2 ","Hello 1 " , " Hello 2 ","Hello 1 again"]

// const filteredArray = arrTwo.filter(function(ele , pos){
//     return arrTwo.indexOf(ele) == pos;
// }) 


function filterDuplicates(data) {
    const filteredArray = data.filter(function(ele , pos){
    return data.indexOf(ele) == pos;
}) 
    
}
filterDuplicates([1,2,23,4,5,5,5])