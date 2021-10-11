import Rey from './Rey.js';
import Escuder from './Escudero.js';
import Luchador from './Luchador.js';
import Asesor from './Asesor.js';

const joffrey = new Rey('Joffrey', 'Baratheon', 17, 2);
const jaime = new Luchador('Jaime', 'Lannister', 35, 'espada', 9);
const daenerys = new Luchador('Daenerys', 'Targaryen', 20, 'dragones', 7);
const tyrion = new Asesor('Tyrion', 'Lannister', 33, daenerys);
const bronn = new Escuder('Bronn', '', 55, jaime);

const personajes = [joffrey, jaime, daenerys, tyrion, bronn];

const characterList = document.querySelector('.characters-list.row.list-unstyled');
const character = document.querySelector('.character.col');

const characterAddCard = function (argArray) {
  for (const personaje of argArray) {
    const newCharacter = character.cloneNode(true);
    characterList.appendChild(newCharacter);
  }
};
characterAddCard(personajes);
