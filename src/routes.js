const express = require('express');
const routes = express.Router();
const ongController = require('./controllers/ongController')
const incidentsController = require('./controllers/incidentsController')
const profileController = require('./controllers/profileController')
const sessionController = require('./controllers/sessionController')



//LOGIN
routes.post('/sessions', sessionController.sessions)


//ONG
routes.post('/ongs', ongController.create)
routes.get('/ongs', ongController.index)
// routes.delete('/ongs/:id', ongController.delete)



//INCIDENTS
routes.post('/incidents', incidentsController.create)
routes.get('/incidents', incidentsController.index)
routes.delete('/incidents/:id', incidentsController.delete)
routes.get('/profile', profileController.index)




module.exports =routes
