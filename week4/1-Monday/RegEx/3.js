// Exercise 03
// Using a regex pattern, find the monetary value contained within the ex3 string.

const ex3 = 'The salad costs $9.99';
//Find all the patterns after the $ and before the space?
const regex = /\$\d\.\d\d/g
/* Regex Explained
1-\$ is to find the dollar character 
2-after the $ char, a digit
3- after that , a point '.'
4- after that, a digit
5- after that ,a  digit

*/


let string = regex.exec(ex3)
console.log(string);