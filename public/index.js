import Rey from './Rey.js';
import Escuder from './Escudero.js';
import Luchador from './Luchador.js';
import Asesor from './Asesor.js';
import PersonajeComponent from './PersonajeComponent.js';

const joffrey = new Rey('Joffrey', 'Baratheon', 17, 2);
const jaime = new Luchador('Jaime', 'Lannister', 35, 'espada', 9);
const daenerys = new Luchador('Daenerys', 'Targaryen', 20, 'dragones', 7);
const tyrion = new Asesor('Tyrion', 'Lannister', 33, daenerys);
const bronn = new Escuder('Bronn', '', 55, jaime);

const personajes = [joffrey, jaime, daenerys, tyrion, bronn];

const characterListElement = document.querySelector('.characters-list.row.list-unstyled');
// const character = document.querySelector('.character.col');

const newCharacter1 = new PersonajeComponent(characterListElement, joffrey);
const newCharacter2 = new PersonajeComponent(characterListElement, jaime);
const newCharacter3 = new PersonajeComponent(characterListElement, daenerys);
const newCharacter4 = new PersonajeComponent(characterListElement, tyrion);
const newCharacter5 = new PersonajeComponent(characterListElement, bronn);

/* const addCard = function (personajes) {
  for (const personaje of personajes) {
    const newCharacter = new Component(characterList, {
      nombre: 'joffrey', familia: 'baratheon', edad: 17, vivo: true,
    });
    characterList.appendChild(newCharacter);
  }
}; */

// addCard(personajes);

// const char1Name = document.querySelector('.character__name.card-title.h4');
// char1Name.firstChild.nodeValue = `${joffrey.nombre} ${joffrey.familia}`;
/*
const addName = function (char) {
  const charName = document.querySelector('.character__name.card-title.h4');
  charName.firstChild.nodeValue = `${char.nombre} ${char.familia}`;
};

const addPicture = function (img) {
  const charPicture = document.querySelector('.character__picture.card-img-top');
  charPicture.src = img;
};

const addAge = function (char) {
  const charAge = document.querySelector('.character__age');
  charAge.firstChild.nodeValue = `Edad: ${char.edad} anyos`;
};

const addEstado = function (char) {
  const alive = document.querySelector('fas.fa-thumbs-up');
  const dead = document.querySelector('fas.fa-thumbs-up');

  if (char.vivo) {
    dead.style.display = 'none';
  } else {
    alive.style.display = 'none';
  }
};

const addCard = function (personajes) {
  for (const personaje of personajes) {
    const newCharacter = character.cloneNode(true);
    characterList.appendChild(newCharacter);

    addName(personaje);
    addPicture(`img/${personaje.nombre}.jpg`);
    addAge(personaje);
    addEstado(personaje);
  }
};

addCard(personajes);
*/
