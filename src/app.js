const express = require('express');
const ApiRoutes = require('./routes')
require('dotenv').config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

ApiRoutes(app);

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});