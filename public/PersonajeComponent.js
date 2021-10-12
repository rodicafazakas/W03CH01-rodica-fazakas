class PersonajeComponent {
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
    const individualFeaturesObject = this.personaje.individualFeatures(); 

    const anyosReinadoHtml = typeof individualFeaturesObject.anyosReinado !== 'undefined' 
                                      ? ` <li> Años de reinado: ${individualFeaturesObject.anyosReinado} </li>` :"";
    const armaHTML = typeof individualFeaturesObject.arma !== 'undefined' 
                                      ? ` <li> Arma: ${individualFeaturesObject.arma} </li>` :"";  
    const destrezaHTML = typeof individualFeaturesObject.destreza !== 'undefined' 
                                      ? ` <li> Destreza: ${individualFeaturesObject.destreza} </li>` :""; 
    const masterHTML = typeof individualFeaturesObject.master !== 'undefined' 
                                      ? ` <li> Master: ${individualFeaturesObject.master} </li>` :""; 
    const gradoPelotismoHTML = typeof individualFeaturesObject.gradoPelotismo !== 'undefined' 
                                      ? ` <li> Grado pelotismo: ${individualFeaturesObject.gradoPelotismo} </li>` :""; 
    const asesoradoHTML = typeof individualFeaturesObject.asesorado !== 'undefined' 
                                      ? ` <li> Asesorado: ${individualFeaturesObject.asesorado} </li>` :""; 

    const individualFeaturesHTML = anyosReinadoHtml + armaHTML + destrezaHTML + masterHTML + gradoPelotismoHTML + asesoradoHTML;
    
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
                ${individualFeaturesHTML}

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

export default PersonajeComponent;