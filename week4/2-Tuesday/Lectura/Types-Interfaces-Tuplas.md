# Types Vrs Interfaces 
Si alguien esta hablando de diferencias entre types e interfaces, esta hablando de diferencias entre alias de tipo e interfaces.

Interfaces ya lo sabemos de sobra. Es un contrato que hace que se comprometan ciertas clases a cumplir ciertas normativas. Nos ayudan a describir como se comportara un objeto.

Type ya es distinto, es una definicion de un tipo de dato, por ejemplo, una union , primitivo, tupla, etc.

Typescript lo que hace es algo llamado type merging. Que es con 2 interfaces.
``` typescript
interface Song {
  artistName: string;
};

interface Song {
  songName: string;
};

const song: Song = {
  artistName: "Freddie",
  songName: "The Chain"
};
```

Cuando creemos un song tendremos las 2 propiedades.

Con Types, esto no sucede.
Tenemos la *Intersection* 
```typescript
type Name = {
  name: “string”
};

type Age = {
  age: number
};

type Person = Name & Age;
```
Entonces, que podemos hacer ? 
1. Podemos crear interfaces, y si tienen el mismo nombre, se unen.
2. Podemos crear types de otros dos types. 

Que no podemos hacer ? 
Crear una interfaz combinando dos tipos.

Algo interesante de ver igual son los :

## Union Types.
Estos nos permiten crear un type que puede ser de otros tipos
```typescript
type Man = {
  name: “string”
};

type Woman = {
  name: “string”
};

type Person = Man | Woman;
```

Lo mismo con las interfaces.
```typescript
interface Man {
  name: "string"
};

interface Woman {
  name: "string"
};

type Person = Man | Woman;
```

## Tuplas
```typescript
type Reponse = [string, number]
```
Es un nuevo data type que incluye dos sets de valores con diferente tipo
Esto solo se pueden definir con Types, no con Interfaces.


## Cuando es mejor Types o Interfaces ?

Interfaces son mejor cuando estas definiendo un nuevo objeto o metodo de un objeto
Types algo mejor cuando necesitas crear una funcion