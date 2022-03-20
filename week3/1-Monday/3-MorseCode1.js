/* https://www.codewars.com/kata/54b724efac3d5402db00065e */
decodeMorse = function(morseCode){
    let message = '';
    let words = morseCode.trim().split("   "); //Quitamos los espacios de inicio al final y separamos por palabras
    for(let word of words){ //Cada palabra en toda la oracion
        let characters = word.split(" ") // Dividiremos la palabra en caracteres
        for(let character of characters){ //Por cxada caracter
            message += MORSE_CODE[character]; //Lo iremos concatenando a mensaje
        }
        message += ' '; // espacio por cada palabra
    }
    return message.trim();
}
decodeMorse("'.... . -.--   .--- ..- -.. .'")