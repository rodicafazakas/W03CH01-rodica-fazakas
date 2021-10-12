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

}

export default Personaje; 