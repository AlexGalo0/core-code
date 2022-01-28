let a1= [
  {name : 'Yosef',age:26} ,
  {name : 'Lorem',age:25} ,
  {name : 'Ipsum',age:30} ,


] ; 
//MAP
let n = [1,2,3,4,5,6,7,8,9,10] ; 

function challenge(a) {
    // let b1=[] ; 
    // for(let i=0 , l=a.length ; i<l ; i++) {
    //     a[1].age*=2 ; 
    //     b1.push(a[i]) ;
    // }

    // return b1 ; 


    return a.map((user) =>{
        user.age *=2 ; 
        return {name:user.name , age: user.age*2} ; //"Hagan esto sin modificar el original", usar map, hacer un nuevo objeto.
    }) ;

   
}

let result = challenge(a1) ; 
// console.log(result) ; 

// a1[0].age= 100 ; 


// console.log(result) ; 


//Reduce : NECESITAN RETORNAL ALGO

// let total = n.reduce((pre,curr) => {
//     console.log(curr) ; 
//     return 0 ; 
// },initialValue) ; 

// console.log(total) ; 


let s = "Hola que tal soy un string" ; 

//Metodos Usados, split,reduce,touppercace,slice,tolocatelowercase,trim

s.split(''.reduce((prev,curr) )=>{
    return  ` ${prev}  ${(curr[0]) .toUpperCase()}                   ` 
} )

split ( ) . reduce ( )



//Filter