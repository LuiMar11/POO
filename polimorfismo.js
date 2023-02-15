class Gato {
  constructor(nombre) {
    this.nombre = nombre;
  }
  getNombre() {
    return this.nombre;
  }
}

class Perro {
  constructor(nombre) {
    this.nombre = nombre;
  }
  getNombre() {
    return this.nombre;
  }
}

function mostrar(nombre) {
  return nombre;
}

let gato = new Gato("Gato");
let perro = new Perro("Perro");

console.log(mostrar(gato.getNombre() + ", " + mostrar(perro.getNombre())));
