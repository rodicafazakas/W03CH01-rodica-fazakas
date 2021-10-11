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

// const char1Name = document.querySelector('.character__name.card-title.h4');
// char1Name.firstChild.nodeValue = `${joffrey.nombre} ${joffrey.familia}`;

const characterName = function (char) {
  const charName = document.querySelector('.character__name.card-title.h4');
  charName.firstChild.nodeValue = `${char.nombre} ${char.familia}`;
};

const characterPicture = function (img) {
  const charPicture = document.querySelector('.character__picture.card-img-top');
  charPicture.src = img;
};

const characterAge = function (char) {
  const charAge = document.querySelector('.character__age');
  charAge.firstChild.nodeValue = `Edad: ${char.edad} anyos`;
};

const characterAddCard = function (personajes) {
  for (const personaje of personajes) {
    const newCharacter = character.cloneNode(true);
    characterList.appendChild(newCharacter);

    characterName(personaje);
    characterPicture(`img/${personaje.nombre}.jpg`);
    characterAge(personaje);
  }
};

characterAddCard(personajes);
