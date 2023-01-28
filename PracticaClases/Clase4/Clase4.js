const fs = require('fs');
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();

fs.writeFile('./Clase4.txt', `Fecha: ${date}, Hora: ${time}`, (error) => {
    if(error) console.log(error);
    fs.readFile('/Clase4.txt', 'utf-8', (error, result) => {
        if(error) return console.log(error);
        console.log(result);
    })
})