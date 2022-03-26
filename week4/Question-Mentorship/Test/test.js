// var MyJSON = {
//     "cities" : [
//         {"name": "Paris","pop":2} ,
//         {"name": "London","pop":8},
//         {"name": "New York","pop":9}
//     ]
// } ; 

// console.log(MyJSON.cities[0].name) ; 

const a = [1,2,3,4] ; 
a.length=2 ; 

function alex() {
    console.log("object");
}
alex().apply()


/*After the execution of the code, which of the statements will be true?
    1) The value of a[2] is 3
    2)Trying to access a[2] returns a reference error
    3)Trying to access a[2] returns a type error
    4)a[2] is undefined --Correct Answer, but why?
*/