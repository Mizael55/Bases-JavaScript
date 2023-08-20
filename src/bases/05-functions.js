


// Functions

// esta es la forma de hacerlo con function normal
function saludar1(nombre) { 
    return `Hola ${nombre}`;
}// Funcion que retorna un string con el nombre que se le pasa por parametro

// esta es la forma de hacerlo con function normal pero con arrow function
const saludar2 = function(nombre) {
    return `Hola ${nombre}`;
}// Funcion que retorna un string con el nombre que se le pasa por parametro

// esta es la forma de hacerlo con arrow function 
const saludar3 = (nombre) => {
    return `Hola ${nombre}`;
}// Funcion que retorna un string con el nombre que se le pasa por parametro

// esta es la forma de hacerlo con arrow function pero con un solo parametro
const saludar4 = (nombre) => `Hola ${nombre}`;// Funcion que retorna un string con el nombre que se le pasa por parametro


console.log(saludar3('Goku'));
console.log(saludar4('Vegeta'));

const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
});

console.log(getUser());

// Tarea
// 1. Transformar a una funcion de flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas
const usuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre
});

const user = usuarioActivo('misael');
console.log(user);



