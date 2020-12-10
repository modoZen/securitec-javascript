function promSolveAfter5Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 5000);
    });
}
async function llamadaAsincrona() {
    const resultado = await promSolveAfter5Seconds();
    console.log(resultado);
}

llamadaAsincrona();

