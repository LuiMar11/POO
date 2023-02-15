class Forma {
  constructor(nombre) {
    this.nombre = nombre;
  }

  getNombre() {
    return this.nombre;
  }

  setNombre(nombre) {
    this.nombre = nombre;
  }
}
class Circulo extends Forma {
  constructor(nombre, radio) {
    super(nombre);
    this.radio = radio;
  }
  getRadio() {
    return this.radio;
  }
  setRadio(radio) {
    this.radio = radio;
  }
}

let circle = new Circulo('circulo',3);

console.log(circle.getNombre()+ ' de radio: '+circle.getRadio());
