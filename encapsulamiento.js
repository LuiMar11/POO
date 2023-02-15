class Animal {
  constructor(nombre, especie) {
    this.nombre = nombre;
    this.especie = especie;
  }

  getNombre() {
    return this.nombre;
  }
  setNombre(nombre) {
    this.nombre = nombre;
  }
  getEspecie() {
    return this.especie;
  }
  setEspecie(especie) {
    this.especie = especie;
  }
}

let gato = new Animal();
gato.setNombre("Gato");
gato.setEspecie("Mamifero");

console.log(gato.getNombre()+', '+gato.getEspecie());
