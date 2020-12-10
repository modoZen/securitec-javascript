function Vehiculo() {}
Vehiculo.prototype={
    constructor:Vehiculo,
    accelerate:function () {
        console.log("is accelerating");
    }
}

function Carro() {};

//indicamos que Carro va a heredar de Vehiculo
Carro.prototype= Object.create(Vehiculo.prototype);


//indicamos que su prototipo es Carro, no Vehiculo
Carro.prototype.constructor=Carro

var myCar = new Carro();

console.log(Carro.prototype);

myCar.accelerate();