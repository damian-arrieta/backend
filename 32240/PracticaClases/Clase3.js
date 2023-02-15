const sumar = (numero1, numero2) => {
    return new Promise ((resolve, rejects) => {
        if(numero1 === 0 || numero2 === 0){
            rejects('Operacion innecesaria')
        } else {
            resolve(numero1 + numero2)
        }
    })
}

const restar = (numero1, numero2) => {
    return new Promise ((resolve, rejects) => {
        if(numero1 === 0 || numero2 === 0){
            rejects('Operacion innecesaria')
        } else if (numero1 - numero2 < 0){
            rejects('La calculadora solo puede dar resultados positivos')
        } else {
            resolve(numero1 - numero2)
        }
    })
}

const multiplicar = (numero1, numero2) => {
    return new Promise ((resolve, rejects) => {
        if(numero1 === 0 || numero2 === 0){
            rejects('Operacion innecesaria')
        } else if (numero1 < 0 || numero2 < 0){
            rejects('La calculadora solo puede dar resultados positivos')
        } else {
            resolve(numero1 * numero2)
        }
    })
}

const sumaAsincronica = async () =>{
    try{
        let resultado = await sumar(2, 5);
        console.log(resultado)
    }
    catch(error){
        console.log(error)
    }
}
const restaAsincronica = async () =>{
    try{
        let resultado = await restar(2, 5);
        console.log(resultado)
    }
    catch(error){
        console.log(error)
    }
}
const multiplicacionAsincronica = async () =>{
    try{
        let resultado = await multiplicar(2, 5);
        console.log(resultado)
    }
    catch(error){
        console.log(error)
    }
}

sumaAsincronica();
restaAsincronica();
multiplicacionAsincronica();