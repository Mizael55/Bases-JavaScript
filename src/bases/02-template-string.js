

// template string

const name = 'Fernando';
const lastName = 'Herrera';

// const nombreCompleto = name + ' ' + lastName;
const nombreCompleto = `${name} ${lastName}`; // template string que permite concatenar variables con strings sin necesidad de usar el operador + ni comillas simples o dobles

console.log(nombreCompleto);

function getSaludo(nombre) {
    return `Hola ${nombre}`;
}

console.log(`Este es un texto: ${getSaludo(name)}`); // template string que permite concatenar variables con strings sin necesidad de usar el operador + ni comillas simples o dobles