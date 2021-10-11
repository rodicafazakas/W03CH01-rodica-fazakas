import Personaje from './Personaje.js';
import Rey from './Rey.js';
import Escuder from './Escudero.js';
import Luchador from "./Luchador.js";
import Asesor from './Asesor.js';

const joffrey = new Rey("Joffrey", "Baratheon", 17, 2);
const jaime = new Luchador("Jaime","Lannister", 35, "espada", 9);
const daenerys = new Luchador("Daenerys","Targaryen", 20, "dragones", 7);
const tyrion = new Asesor("Tyrion","Lannister", 33, daenerys);
const bronn =  new Escuder("Bronn", "", 55, jaime);

// los comunicados de los luchadores
const personajeList = [joffrey, jaime, daenerys, tyrion, bronn];
const communicationFunction = function (arg) {
  if (arg instanceof Luchador ) {
    arg.map( x => x.comunicar());
  }
}  
communicationFunction(personajeList);
personajeList.forEach(mensaje => console.log(mensaje));

// la serie a la que pertenecen los personajes
console.log(joffrey.serie);

// matar a Jaime y a Tyrion
console.log(`Jaime es vivo? ${jaime.vivo}`);
console.log(`Tyrion es vivo? ${tyrion.vivo}`);
jaime.morir();
tyrion.morir();
console.log(`Jaime es vivo? ${jaime.vivo}`);
console.log(`Tyrion es vivo? ${tyrion.vivo}`);

