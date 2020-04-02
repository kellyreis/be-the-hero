const express = require('express');
const ongController = require('./controllers/OngController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');
const connection = require('./database/conection');


const routes = express.Router();

//Lista Ongs
routes.get('/ongs', ongController.index);

//cadastra Ongs
routes.post('/ongs', ongController.create);

//Lista Incidents
routes.get('/incidents', incidentController.index);

//Cadastra incident
routes.post('/incidents', incidentController.create);

//Deleta incident
routes.delete('/incidents/:id', incidentController.delete);

//Listar casos especificos de ong
routes.get('/profile', profileController.index);

routes.post('/sessions', sessionController.create);

module.exports = routes;