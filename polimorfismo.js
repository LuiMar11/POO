class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }
  toString() {
    return "Animal" + this.nombre;
  }
}

class Gato {
  constructor(nombre) {
    this.nombre = nombre;
  }
  toString() {
    return "Gato: " + this.nombre;
  }
}

class Perro {
  constructor(nombre) {
    this.nombre = nombre;
  }
  toString() {
    return "Perro: " + this.nombre;
  }
}


let gato = new Gato("Cat");
let perro = new Perro("Dog");

console.log(gato.toString() + ", " + perro.toString());
