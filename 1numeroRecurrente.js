let arreglo =[1,2,3,4,3,5,5,5];
var mayorValor=0, mayorIndex=0;

let veces= arreglo.map((value1)=>{
    let count =0;
    arreglo.forEach((value2)=>{
        if(value1==value2){
            count++
        }
    });
    return count++;
});

veces.forEach((value,index)=>{
    if(value>mayorValor){
        mayorValor=value;
        mayorIndex=index;
    }
});

console.log(arreglo[mayorIndex]);