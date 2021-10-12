import Personaje from './Personaje.js';

class Rey extends Personaje {
  anyosReinado;
  fraseTipo;

  constructor(nombre, familia, edad, anyosReinado) {
    super(nombre, familia, edad); 
    this.anyosReinado = anyosReinado; 
    this.fraseTipo = "Vais a morir todos";
  }

  /* lo de abajo tambien es valido
    comunicar () {
    return super.comunicar() + "Vais a morir todos";
  }*/

  individualFeatures() {
    return { anyosReinado: this.anyosReinado}
  };
}

export default Rey;
