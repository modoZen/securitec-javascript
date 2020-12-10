var newCode = {
    apples: 3,
    oranges: 4
}
var oldCode = {
    apples: 3,
    bananas: 5
}
function viejasCaresticias(nuevo, viejo) {
    let aux3;
    let condicion = 0;
    let aux1 = Object.entries(nuevo);
    let aux2 = Object.entries(viejo);
    aux3 = aux2.filter(function (element) {
        aux1.forEach(function (el) {
            if (element[0] != el[0]) {
                condicion++;
            }
        })
        if (condicion == aux2.length) {
            return true
        }
        condicion = 0;
    });
    return aux3;
}
function nuevasCaracteristicas(nuevo, viejo) {
    let aux3;
    let condicion = 0;
    let aux1 = Object.entries(nuevo);
    let aux2 = Object.entries(viejo);
    aux3 = aux1.filter(function (element) {
        aux2.forEach(function (el) {
            if (element[0] != el[0]) {
                condicion++;
            }
        })
        if (condicion == aux1.length) {
            return true
        }
        condicion = 0;
    });
    return aux3;
}
function diff(nuevo, viejo) {
    let diferencia = [];
    var condicion = 0;
    var aux3;
    var aux1 = Object.entries(nuevo);
    var aux2 = Object.entries(viejo);
    //en caso propiedades desaparezcan
    aux3 = viejasCaresticias(nuevo, viejo)
    aux3 = Object.fromEntries(aux3);
    for (const i in aux3) {
        diferencia.push(["-", `${i}`, `${aux3[i]}`]);
    }
    //en caso propiedades aparezcan
    aux3 = nuevasCaracteristicas(nuevo, viejo);
    aux3 = Object.fromEntries(aux3);
    for (const i in aux3) {
        diferencia.push(["+", `${i}`, `${aux3[i]}`]);
    }

    //en casose conservenla propiedad pero cambio el valor
    aux1.forEach(function (element) {
        aux2.forEach(function (el) {
            if (element[0] == el[0]) {
                if (element[1] > el[1]) {

                    diferencia.push(["+", `${element[0]}`, `${element[1] - el[1]}`]);
                }
                if (element[1] <  el[1]) {

                    diferencia.push(["-", `${element[0]}`, `${el[1] - element[1]}`]);
                }
            }
        })
    });
    return diferencia;
}
console.log(diff(newCode, oldCode))
/*[
    ['-'.'bananas',5],
    ['+','oranges',4]
]
*/