const controller = require('./controller')
const movieModel = require('../model/movieModel')
const movieService = require('../controller/service/movieService')


const movieServiceObj = new movieService(
      movieModel.getInstance()
);

class movieController extends controller {

    constructor(service) {
        super(service);
    }

}

module.exports= new movieController(movieServiceObj);
