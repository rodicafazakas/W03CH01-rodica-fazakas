import Personaje from "./Personaje.js";
import Rey from './Rey.js';
import Escuder from './Escudero.js';
import Luchador from "./Luchador.js";

class Asesor extends Personaje {
  asesorado;
  fraseTipo;

  constructor (nombre, familia, edad, asesorado) {
    super(nombre, familia, edad);
    this.fraseTipo = "No sé por qué, pero creo que voy a morir pronto";

    if ( asesorado instanceof Rey || 
         asesorado instanceof Luchador || 
         asesorado instanceof Asesor || 
         asesorado instanceof Escuder 
    ) {
      this.asesorado = asesorado;
    }

  /*comunicar () {
    return "No sé por qué, pero creo que voy a morir pronto";
  }*/
  }
}

export default Asesor;