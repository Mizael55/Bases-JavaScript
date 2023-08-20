import { heroes } from "../data/heroes";

export const getHeroeById = (id) => {
  // esta funcion recibe un id y retorna el heroe que coincida con el id
  return heroes.find((heroe) => heroe.id === id);
};

// console.log(getHeroeById(2));

export const getHeroesByOwner = (owner) => {
  // esta funcion recibe un owner y retorna un array con los heroes que coincidan con el owner
  return heroes.filter((heroe) => heroe.owner === owner);
};

// console.log(getHeroesByOwner('DC'));
