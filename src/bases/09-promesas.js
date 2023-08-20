// promesas

import { getHeroeById } from "./bases/08-import-export";

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         const heroes = getHeroeById(2);
//         // console.log(heroes);
//         resolve(heroes);
//     }, 1000);
// });

// promesa.then( (data) => {
//     console.log(data);
// }
// ).catch( (error) => {
//     console.log(error);
// }
// );

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroes = getHeroeById(id);
      // console.log(heroes);
      if (heroes) {
        resolve(heroes);
      } else {
        reject("No se pudo encontrar el heroe");
      }
    }, 1000);
  });
};

getHeroeByIdAsync(35).then(console.log).catch(console.log);
