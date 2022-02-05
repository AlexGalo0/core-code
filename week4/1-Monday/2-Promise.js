let p = new Promise((resolve,reject) =>{
    let a= 1+33
    if(a==2) {
        resolve("Siu")
    }else {
        reject("Failed") ; 
    }
}) 

p.then((message)=>{
    console.log("This is the then: "+message)
}).catch((message)=>{
    console.log("This is in the catch" +message)
})

//El then es , hacer eso cuando funcione, y el catch es, hacer eso cuando no funcione


//Promise.All  recorre todas las promesas
//Promise.Race devuelve la primera promesa que se cumplira