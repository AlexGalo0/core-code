function createPhoneNumber(numbers) {
    return numbers.join("").replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
    /* Se usa una regex para crear los grupos, primero de 3 digitos, segundo de 3 y el ultimo de 4.
    Primer grupo lo denotamos por $1, y queda dentro parentesis.
    Etc,etc
    */
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))