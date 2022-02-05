function validSpacing(s) {
    //'' true
    if(s===" ") return false ; 

    //Verificar si esta al principio
    if(s.charAt(0)==" ") return false ; 

    //Verificar si esta al final
    if(s.charAt(s.length-1)==" ") return false ; 
 
    for(let i=0 ; i<=s.length-1;i++) {
        //Verificar si no hay
        if(s.charAt(i)!==" ") return true ; 
    }
    //Chequear si hay 2 espacios seguidos, utilizando RegEx.
    const regex= /\s\s+/gm ; 
    if(regex.test(s)) return false ; 


  }
validSpacing("Hola") ; 