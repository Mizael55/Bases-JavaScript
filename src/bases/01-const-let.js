
// variables y constantes

const nombre = 'Fernando'; // no se puede reasignar el valor de una constante (nombre = 'Melissa') 
const apellido = 'Herrera'; // no se puede reasignar el valor de una constante (apellido = 'Gomez')

let valorDado = 5; // si se puede reasignar el valor de una variable (valorDado = 4) porque es una variable let y no const
valorDado = 4; // aqui se reasigna el valor de la variable let valorDado a 4 

console.log(nombre, apellido, valorDado);

if (true) {
    let valorDado = 6; // aqui se crea una nueva variable let valorDado que solo existe dentro del if y no afecta a la variable let valorDado que esta fuera del if
    console.log(valorDado);
}

console.log(valorDado); // aqui se imprime el valor de la variable let valorDado que esta fuera del if