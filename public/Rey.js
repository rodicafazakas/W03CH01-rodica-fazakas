import Personaje from './Personaje.js';

class Rey extends Personaje {
  anosReinado;
  fraseTipo;

  constructor(nombre, familia, edad, estado, anosReinado) {
    super(nombre, familia, edad, estado); 
    this.anosReinado = anosReinado; 
    this.fraseTipo = "Vais a morir todos";
  }

  /* lo de abajo tambien es valido
    comunicar () {
    return super.comunicar() + "Vais a morir todos";
  }*/
}

export default Rey;
