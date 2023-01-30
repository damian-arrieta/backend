/* const fs = require('fs');
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();

fs.writeFile('./Clase4.txt', `Fecha: ${date}, Hora: ${time}`, (error) => {
    if(error) console.log(error);
    fs.readFile('/Clase4.txt', 'utf-8', (error, result) => {
        if(error) return console.log(error);
        console.log(result);
    })
});*/

import fs from 'fs';

const leerArchivo = async (nombre) => {
    try {
        let contenidoSTR = await fs.promises.readFile(nombre, 'utf-8');
        let contenidoObj = JSON.parse(contenidoSTR);
        let size = (await fs.promises.stat(nombre)).size;
        const info = {
            'contenidoSTR': contenidoSTR,
            'contenidoObj': contenidoObj,
            'size': size
        }
        return info
    } catch (error) {
        throw new Error (error.message);
    }
}

const resultado = async () => {
    try {
        const info = await leerArchivo('package.json');
        console.log(info)
    } catch (error) {
        throw new Error (error);
    }
}

(async function main() {
    try {
        await resultado();
    } catch (error) {
        console.error(error);
    }
})();