const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});