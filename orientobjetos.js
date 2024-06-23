class Vehiculo {
    constructor(marca, modelo,año, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.año= año;
    }

    descripcion() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, año: ${this.año}, Color: ${this.color}`);
    }

    arrancar() {
        console.log(`El vehículo ${this.marca} ${this.modelo} está en movimiento.`);
    }

    detener() {
        console.log(`El vehículo ${this.marca} ${this.modelo} se detuvo.`);
    }

}

class Coche extends Vehiculo {
    constructor(marca, modelo, año, color, numPuertas) {
        super(marca, modelo, año, color);
        this.numPuertas = numPuertas;
    }

    descripcion() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, año: ${this.año}, Color: ${this.color}`);
    }

    arrancar() {
        console.log(`El vehículo ${this.marca} ${this.modelo} está en movimiento.`);
    }

    detener() {
        console.log(`El vehículo ${this.marca} ${this.modelo} se detuvo.`);
    }

    tocarBocina() {
        console.log(`La Bocina del ${this.marca} ${this.modelo} está en buen estado`);
    }
}


class Moto extends Vehiculo {
    constructor(marca, modelo, color, tipo) {
        super(marca, modelo, color);
        this.cilindrada = tipo;
    }

    descripcion() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, año: ${this.año}, Color: ${this.color}`);
    }

    arrancar() {
        console.log(`El vehículo ${this.marca} ${this.modelo} está en movimiento.`);
    }

    detener() {
        console.log(`El vehículo ${this.marca} ${this.modelo} se detuvo.`);
    }


    calibrar() {
        console.log(`La moto ${this.marca} ${this.modelo} está haciendo acrobacias!`);
    }
}

let coche1 = new Coche("Toyota", "Corolla", 2012, "Rojo");
let coche2 = new Coche("Ford", "Mustang", 2020, "Negro");

let moto1 = new Moto("Honda", "CBR600", 2013, "Negro");
let moto2 = new Moto("Yamaha", "R1", 2015, "Azul");


coche2.descripcion();
coche2.arrancar();
coche2.detener();
coche2.tocarBocina

moto1.descripcion();
moto1.arrancar();
moto1.detener();
moto1.calibrar();
