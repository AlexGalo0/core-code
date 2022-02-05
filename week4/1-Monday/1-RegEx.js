const string = "all your base are belong to us ";
const regex = /base/; //Creation of a regular expression /regex/
const isExisting = regex.test(string);
console.log(isExisting);

/* ^  : Specify the start of a string  pass to match 
   $  : Specify the end of a string
   
   ^palabraAEncontrar$
   No hallara nada mas, si la palabra esta incluida en el string pero hay mas caracteres, no lo detectara
*/

const string2 = "alex es ";
const nextRegex = /^alex$/;

console.log(nextRegex.test(string2));

/* ========== Character Classes ========

 With the character classes, we need to add extra commands, like +,*,{},etc. 

    [a-z]+ = one or more
    [a-z]* = zero or more 
    [a-z]{1,4} : de  1 a 4 caracteres

    Sidenote: el * y el + sirven para ver si hay caracteres o si esta vacio

 Also, for example, if you want to search specific values like an age of 123, you need to put it as 
 /age is [123]/
    
  
*/

const string3 = "my name is 123 and my age is 26 ";
const nextRegex2 = /name is [a-z]/;

console.log(nextRegex2.test(string3));

/* Check for capital letters and normal letters*/


const string4 = "my name is 123 and my age is 26 ";
const nextRegex3 = /name is [a-zA-Z]+/;

console.log(nextRegex3.test(string4));



/* 
/?/ : An optional character
*/

const string5 = "my name is cody and my age is 26 ";
const nextRegex4 = /name is cody?/;

console.log(nextRegex4.test(string5));

/* Want my age to be from 0-9 and only 3 characters*/


const string6 = "my name is cody and my age is 265";
const nextRegex5 = /age is [0-9]{1,3}$/;

console.log(nextRegex5.test(string6));

/* Chequear si solo tiene 1 digito.
[0-9]{1}
*/

/*
\w: word character
\d: digit character
\s : Space Character
\n: line jump

*/


/* Digamos que queremos guardar lo que obtenemos de una regex, digamos , comprobamos que  cody existe en : 
my name is cody

Necesitariamos usar grupíng y en vez de regex.test(string) debe ser regex.exec(string)

===NOTA IMPORTANTE===
Hay que cambiar el regex a Global si queremos que busque todas las coincidencias y no solo la primera



*/

const string7 = "my name is alex";
const nextRegex8 = /name is ([a-z]+)/;

const match = nextRegex8.exec(string7);
if(match){
    const name = match[1] ;  //Si el nmombre es igual a todo el grupo 1 
    console.log(name) ; 
}else {
    console.log('no match')
}



const string8="filea.mp3 file_01.mp3 file_02.mp3 test.csv other.txt"
const regex9 = /(\w+)\.mp3/g; 


let match2 = regex9.exec(string8);

while(match2) {
    const filename = match2[1] ; 
    console.log(filename) ;
    match2= regex.exec(string8) ; 
}
