// desestructuración
// asignación desestructurante

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

const { nombre, edad, clave } = persona; // desestructuración de objeto persona

console.log(nombre);

// desestructuración de objeto persona en una función
const useContext = ({ nombre, edad, clave, rango = "capitan" }) => {
  // console.log(nombre, edad, clave, rango);

  return {
    nombreClave: clave,
    anios: edad,
    rango: rango,
    latlng: {
      lat: 14.1232,
      lng: -12.3232,
    },
  };
};

const { nombreClave, anios, latlng:{lat, lng} } = useContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);


