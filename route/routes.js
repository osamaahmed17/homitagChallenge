
const genreController = require('../controller/genreController');
const movieController = require('../controller/movieController');

module.exports = (app) => {
    app.get(`/rest/api/v1/genre`, genreController.getAll);
    app.post(`/rest/api/v1/genre`, genreController.insert);
    app.delete(`/rest/api/v1/genre`, genreController.delete);
    app.delete(`/rest/api/v1/genre`, genreController.update);


    app.get(`/rest/api/v1/movie`, movieController.getAll);
    app.post(`/rest/api/v1/movie`, movieController.insert);
    app.delete(`/rest/api/v1/movie`, movieController.delete);
    app.delete(`/rest/api/v1/movie`, movieController.update);

};