function spinWords(string) {
    return string
      .split(" ") //Lo dividimos por espacio
      .reduce((prev, curr) => {
        return `${prev} ${
          curr.length >= 5 ? curr.split("").reverse().join("") : curr //Si la palabra curr tiene longitud mayor a 5, se hace un reverrse
        }`;
      }, "")
      .trim(); //Quitamos los espacios
  }