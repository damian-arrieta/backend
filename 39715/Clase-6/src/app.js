import express from 'express';

const app = express();

function saludo () {
    return "<h1 style='color:blue;'>Bienvenido!</h1>";
}

const usuario = {
    nombre: 'Alfredo',
    apellido: 'Mercurio',
    edad: 60,
    mail: 'alfredomercurio@gmail.com'
}

app.get('/bienvenida', (req, res) => {
    res.send(saludo());
})

app.get('/usuario', (req, res) => {
    res.send(usuario);
})

app.listen(8080, () => {
    console.log('Servidor funcionando');
})