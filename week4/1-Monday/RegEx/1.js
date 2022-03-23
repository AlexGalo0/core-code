// Exercise 01
// Using a regex pattern, get the 3 letter words in the ex1 string.
const ex1 = 'The quick brown fox jumped over the lazy dog';

const regex = /(^|\s)[a-zA-Z]{3}($|\s)/g
/* Let's explain the Regex
    1- It must be between /regex/
    2-If i want to make a "choice" (option1 | option 2 )
    3- ^ is the beginning of the sentence
    4-  \s is space
    5- (^|\s) is telling that , it can begin the matching with the start of the sentence or an space
    6- [a-zA-Z] any character that fills that range
    7-{3} number of characters
    8-$ is the end of the sentence.
   
*/
let intento = regex.match(ex1)
console.log(intento);












