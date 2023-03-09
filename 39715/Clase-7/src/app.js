import express from 'express';

const app = express();

app.get('/saludo', (req, res) => {
    res.send('Hola a todos, pero ahora desde Express');
})

app.listen(8080, () => {
    console.log('Servidor funcionando');
})