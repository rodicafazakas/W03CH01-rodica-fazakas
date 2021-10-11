import Personaje from "./Personaje.js";
import Luchador from "./Luchador.js";

class Escuder extends Personaje {
  master;
  gradoPelotismo;
  fraseTipo;

  constructor (nombre, familia, edad, master, gradoPelotismo) {
    super(nombre, familia, edad);
    this.fraseTipo = "Soy un loser";

    if (master instanceof Luchador){
      this.master = master;
    }

    if (gradoPelotismo >=0 && gradoPelotismo <= 10) {
      this.gradoPelotismo = gradoPelotismo;
    }

  }

  /*comunicar () {
    return "Soy un loser";
  }*/

}

export default Escuder;