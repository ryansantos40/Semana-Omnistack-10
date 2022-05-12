const { Router} = require('express');

const DevController = require('./controllers/DevControllers');
const SearchController = require('./controllers/SearchController');
const { index } = require('./models/utils/PointsSchema');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/search', SearchController.index);

module.exports = routes;