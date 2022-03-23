
// Exercise 04
// Using a regex pattern, find the telephone number contained within the ex4 string.

const ex4 = 'Contact customer support on 0800 300 500';
// const regex = /\d{4}\s\d{3}\s\d{3}/g ----->  una manera de hacerlo
const regex = / (\d{3,4})\s?/
/* 
1- \d matches a digit 
2-{3,4} las coincidencias del antiguo caracter, o sea el  \d
3-\s? es el espacio opcional


*/
let string = regex.exec(ex4)
console.log(string);