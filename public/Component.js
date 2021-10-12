class Component {
  element;
  parentElement;
  personaje;

  constructor(parentElement, personaje) {
    this.parentElement = parentElement;
    this.element = document.createElement('li');
    this.element.className = 'character';
    this.parentElement.append(this.element);
    this.personaje = personaje;
    this.generateHTML();
  }

  generateHTML() {
    const vivoHtml = this.personaje.vivo ? ` <i class="fas fa-thumbs-up"></i>` : ` <i class="fas fa-thumbs-down"></i>`;
    this.element.innerHTML = 
        `<div class="card character__card">
            <img
              src="img/${this.personaje.nombre}.jpg"
              alt="Nombre y familia del personaje"
              class="character__picture card-img-top"
            />
            <div class="card-body">
              <h2 class="character__name card-title h4">${this.personaje.nombre}  ${this.personaje.familia}</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: ${this.personaje.edad} años</li>
                  <li>
                    Estado:
                    ${vivoHtml}
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled"> 
                <!-- fskdhfgask--> 
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button class="character__action btn">muere</button>
                </div>
              </div>
            </div>
            <i class="emoji"></i>
          </div>`;
  }
}

export default Component;