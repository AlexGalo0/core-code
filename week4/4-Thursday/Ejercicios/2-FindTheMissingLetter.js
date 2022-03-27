//https://www.codewars.com/kata/5839edaa6754d6fec10000a2
function findMissingLetter(array) {
    const initArray = array.join("").charCodeAt(0);
 
  
    for (let i = 0; i < array.length; i++) {
      if (array.join("").charCodeAt(i) != initArray + i)
        return String.fromCharCode(initArray + i);
    }
  }
  findMissingLetter(["a","b","c","d","f"])