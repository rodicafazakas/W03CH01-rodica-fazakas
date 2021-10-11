import Personaje from "./Personaje.js";

class Luchador extends Personaje {
  arma;
  destreza;
  fraseTipo;

  constructor (nombre, familia, edad, arma, destreza) {
    super(nombre, familia, edad);
    this.arma = arma;
    this.destreza = destreza;
    this.fraseTipo = "Primero pego y luego pregunto";



    if (destreza >=0 && destreza <= 10) {
      this.destreza= destreza;
    }

  }

  /*comunicar () {
    return super.comunicar() + "primero pego y luego pregunto";
  }*/

}

export default Luchador;