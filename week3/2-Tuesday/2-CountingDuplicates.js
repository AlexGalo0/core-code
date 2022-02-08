function duplicateCount(text) {
    let obj = {} //Creamos un objeto que guardara cuantos repetidos hay
    let count=0 ; 
    for(let i of text) { //Recorremos el objeto
        i= i.toLowerCase()  ; 
        console.log(i);
        if(!obj[i]) { //Si el objeto  no existe , lo crearemos
            obj[i] = 1 ; 
        } else { //Si si existe
            obj[i] ++ ; 
        }
    }

    for(let i in obj) {
        if(obj[i]>1) {
            count++ ; 
        }
    }


    console.log(count); 

}


duplicateCount("ababaAAAA")
