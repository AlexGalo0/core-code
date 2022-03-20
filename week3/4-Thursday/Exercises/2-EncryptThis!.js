/*https://www.codewars.com/kata/5848565e273af816fb000449  */
var encryptThis = function(text) {
    return text.split(" ").map((word)=>{
        if(word.length===1) {
            return '' + word.charCodeAt() ; 
        }
        if(word.length==2) {
            return word.charCodeAt(0) + word[1] 
        }
        return word.charCodeAt(0) + word[word.length-1] + word.slice(2,-1) + word[1]
    }).join(" ")
}
console.log(encryptThis("Hello"))
