const productos = [
    {manzanas: 2,
    bananas: 3,
    duraznos: 1,
    naranjas: 5,
},
    {manzanas: 3,
    bananas: 5,
    duraznos: 1,
    naranjas: 2
}]

let obtenerValores = Object.entries(productos);
console.log(obtenerValores);

let obtener = Object.values(productos);
console.log(obtener);

let suma = obtener.reduce((valor, valor1) => valor + valor1);
console.log(suma);