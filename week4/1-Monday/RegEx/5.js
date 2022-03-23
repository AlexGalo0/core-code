

// Exercise 05
// Using a regex pattern, find the email address contained within the ex5 string.


const ex5 = 'You can contact me on Twitter @codebubb or james@juniordevelopercentral.com';
const regex = /\S+@\S+/g
/* 
1-\S : All the characters that are NOT spaces is with a Capital S
2- + : one or more char
3- the literal @

*/