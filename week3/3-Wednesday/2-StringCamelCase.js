function toCamelCase(str){
    if(str.length==0) return "" ; 
    //regex to make the character next to "-" or "_" uppercase
    const makeCharUp= /(^|-|_)(\S)/g ; 
    camelCaseStr = str.replace(makeCharUp, char=>char.toUpperCase()) ; 
    //regex to remove dash
    const removeDash = /-|_/g
    camelCaseStr= camelCaseStr.replace(removeDash,"") ; 
    
    if(str[0]!==str[0].toUpperCase()) { //Si el primer char era minuscula   
       return camelCaseStr.charAt(0).toLowerCase() + camelCaseStr.slice(1)  ; 
    } else {
        return camelCaseStr ; 
    }
}