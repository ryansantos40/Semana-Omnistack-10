const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes');
const cors = require('cors');

mongoose.connect("mongodb+srv://ryan:123@cluster0.gb9fc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

app.use(cors());
app.use(express.json());
app.use(routes);

// Métodos HTTP: get, post, put, delete

// Tipos de Parâmetros:
// Query Params: req.query (Filtros, ordenação, paginação, ...)
// Route Params: req.params (Identificar um recurso na alteração ou remoção)
// Body: req.body (Dados para criação ou alteração de um pedido)

//MangoDB (Bando de Dados não-relacional)





app.listen(3333);
