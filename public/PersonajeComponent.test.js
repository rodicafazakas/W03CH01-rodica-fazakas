import PersonajeComponent from './PersonajeComponent';
import Rey from './Rey.js';

describe('Given a PersoanjeComponent class', () => {
  describe('when it receives an ul container and a personaje object that is Rey ', () => {
    it('it should render a li element inside the ul container', () => {
      // Arrange
      const container = document.createElement('ul');
      const joffrey = new Rey('Joffrey', 'Baratheon', 17, 2);
      const expectNameAndFamily = 'Joffrey  Baratheon';

      // Act
      new PersonajeComponent(container, joffrey);
      const foundNameAndFamily = container.querySelector('.character__name.card-title.h4').textContent;
      // Assert

      expect(expectNameAndFamily).toBe(foundNameAndFamily);
    });
  });
});
