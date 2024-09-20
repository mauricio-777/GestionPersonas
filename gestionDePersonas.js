class Persona {
    constructor(nombre,edad,tipo) {
        this.nombre = nombre
        this.edad = edad
        this.tipo = tipo
    }
    presentar(){
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`);
    }
}

class Estudiante extends Persona {
    constructor(nombre,edad,carrera) {
        super(nombre,edad)
        this.carrera = carrera
        this.tipo = "Estudiante"
        
    }
    presentar(){
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`);
    }
    info(){
        return (`Soy estudiante de ${this.carrera}`);
    }
}

class Docente extends Persona {
    constructor(nombre,edad,materia) {
        super(nombre,edad)
        this.materia = materia
        this.tipo = "Docente"
    }
    presentar(){
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`);
    }
    info(){
        return `Soy docente de ${this.materia}`;
    }
}

class Administrativo extends Persona {
    constructor(nombre,edad,puesto) {
        super(nombre,edad)
        this.puesto = puesto
        this.tipo = "Adminisrtrativo"
    }
    presentar(){
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`);
    }
    info(){
        return `Soy administrativo en el puesto de ${this.puesto}`;
    }
}

function mostrarInfoGeneral (Persona) {
    Persona.presentar()
    console.log(Persona.info());
}

const estudiante = new Estudiante('Juan', 20, 'Ingeniería');
const docente = new Docente('María', 35, 'Matemáticas');
const administrativo = new Administrativo('Pedro', 40, 'Secretario');

mostrarInfoGeneral(estudiante); // "Hola, soy Juan, estudiante de Ingeniería."
mostrarInfoGeneral(docente); // "Hola, soy María, docente de Matemáticas."
mostrarInfoGeneral(administrativo); // "Hola, soy Pedro, administrativo en elpuesto de Secretario."