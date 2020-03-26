const express = require('express');

const OngController = require('./controlers/OngControler');
const IncidentController = require('./controlers/IncidentControler');
const ProfileController = require('./controlers/ProfileControler');
const SessionController = require('./controlers/SessionControler');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;