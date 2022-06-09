
const genreController = require('../controller/genreController');
const movieController = require('../controller/movieController');

module.exports = (app) => {
    app.get(`/rest/api/v1/genre`, genreController.getAll);
    app.post(`/rest/api/v1/genre`, genreController.insert);
    app.put(`/rest/api/v1/genre/:id`, genreController.update);
    app.delete(`/rest/api/v1/genre/:id`, genreController.delete);


    app.get(`/rest/api/v1/movie`, movieController.getAll);
    app.post(`/rest/api/v1/movie`, movieController.insert);
    app.delete(`/rest/api/v1/movie/:id`, movieController.delete);
    app.put(`/rest/api/v1/movie/:id`, movieController.update);

};