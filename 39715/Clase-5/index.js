const fs = require('fs');

const fecha = new Date().toString();

fs.writeFile('./fechaYhora.txt', fecha, (error) => {
    if (error) return console.log('Error');
})

fs.readFile('./fechaYhora.txt', 'utf-8', (error, resultado) => {
    if (error) return console.log('Error');
    console.log(resultado)
})