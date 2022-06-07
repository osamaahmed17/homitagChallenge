const controller = require('./controller')
const genreModel = require('../model/genreModel')
const genreService = require('../controller/service/genreService')


const genreServiceObj = new genreService(
       genreModel.getInstance()
);

class genreController extends controller {

    constructor(service) {
        super(service);
    }

}

module.exports=  new genreController(genreServiceObj);
