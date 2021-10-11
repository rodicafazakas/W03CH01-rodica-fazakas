class Personaje {
  nombre; // public field names
  familia;
  edad;
  vivo = true;
  fraseTipo = "Yo soy: " ;

  static serie = "Juego de Tronos";
  static familia = {  // static -- propiedad de la clase, no de la instancia
    ARRYN: "casa Arryn",
    BARATHEON : "casa Baratheon",
    TRULLY: "casa Trully",
    TYRELL: "casa Tyrell",
    GREYJOY: "casa Greyjoy",
    LANNISTER: "casa Lannister",
    TARGARYEN: "casa Targaryen",
    STARK: "casa Stark"
  };


  constructor (nombre, familia, edad) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
  }

  comunicar() {
      return this.fraseTipo;
  }

  morir() {
    this.vivo = false; 
  }

  /*render() {
    const vivoHtml = this.vivo ? ` <i class="fas fa-thumbs-up"></i>` : ` <i class="fas fa-thumbs-down"></i>`;

    const characterList = document.querySelector('.characters-list.row.list-unstyled');
    let node = document.createElement("li");
    node.classList.add("character", "col");
    node.innerHTML = 
          `<div class="card character__card">
            <img
              src="img/no-one.jpg"
              alt="Nombre y familia del personaje"
              class="character__picture card-img-top"
            />
            <div class="card-body">
              <h2 class="character__name card-title h4">${this.nombre} y ${this.familia}</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: ${this.edad} años</li>
                  <li>
                    Estado:
                    ${vivoHtml}
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">  
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button class="character__action btn">muere</button>
                </div>
              </div>
            </div>
            <i class="emoji"></i>
          </div>`;
        characterList.appendChild(node);
  }*/
}

export default Personaje; 