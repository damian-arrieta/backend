//Hands of lab:
const mostrarlista = (lista) => {
    let i;

    for( i=0; i<lista.length; i++){
        if (lista=== '') {
            console.log('La lista esta vacía')
        } else {
            console.log(`${lista[i]} cantidad ${lista.length}`)
        }
    }
}

mostrarlista([1, 2, 3]);

class Contador {
    static contadorGlobal = 0;

    constructor(nombre) {
        this.nombre = nombre;
        this.contador = Contador.contadorGlobal++;
    }
}

let contador1 = new Contador('Damian');
let contador2 = new Contador('Paula');
console.log(contador1);
console.log(contador2);
