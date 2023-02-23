const suma = (numero1, numero2) => {
    if (numero1 === 0 || numero2 === 0) {
        console.error('Operacion innecesaria');
    }
    else if (numero1 < 0 || numero2 < 0) {
        console.error('La calculadora sólo debe devolver valores positivos');
    } else {
        console.log(numero1 + numero2);
    }
}

const resta = (numero1, numero2) => {
    if (numero1 === 0 || numero2 === 0) {
        console.error('Operacion innecesaria');
    }
    else if (numero1 - numero2 < 0) {
        console.error('La calculadora sólo debe devolver valores positivos');
    } else {
        console.log(numero1 - numero2);
    }
}

const multiplicacion = (numero1, numero2) => {
    if (numero1 === 0 || numero2 === 0) {
        console.error('Operacion innecesaria');
    }
    else if (numero1 < 0 || numero2 < 0) {
        console.error('La calculadora sólo debe devolver valores positivos');
    } else {
        console.log(numero1 * numero2);
    }
}

const calculos = async() => {
    
}