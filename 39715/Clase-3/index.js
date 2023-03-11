const suma = (numero1, numero2) => {
    return new Promise ((res, rej) => {
        if (numero1 === 0 || numero2 === 0)
            rej('Operacion innecesaria');
        if (numero1 + numero2 < 0)
            rej('La calculadora sólo debe devolver valores positivos');
        res(console.log(numero1 + numero2));
    })
}

const resta = (numero1, numero2) => {
    return new Promise ((res, rej) => {
        if (numero1 === 0 || numero2 === 0)
            rej('Operacion innecesaria');
        if (numero1 - numero2 < 0)
            rej('La calculadora sólo debe devolver valores positivos');
        res(console.log(numero1 - numero2));
    })
}

const multiplicacion = (numero1, numero2) => {
    return new Promise ((res, rej) => {
        if (numero1 < 0 || numero2 < 0)
            rej('Operacion innecesaria');
        if (numero1 * numero2 < 0)
            rej('La calculadora sólo debe devolver valores positivos');
        res(console.log(numero1 * numero2));
    })
}

const division = (numero1, numero2) => {
    return new Promise ((res, rej) => {
        if (numero1 < 0 || numero2 < 0)
            rej('Operacion innecesaria');
        if (numero1 / numero2 < 0)
            rej('La calculadora sólo debe devolver valores positivos');
        res(console.log(numero1 / numero2));
    })
}

const calculos = async() => {
    try {
        await suma(5, 0);
        await resta(5, 3);
        await multiplicacion(5, 3);
        await division(5, 0);
    } catch (error) {
        console.error(error);
    }
}

calculos();