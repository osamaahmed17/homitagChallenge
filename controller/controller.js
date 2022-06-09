const validations = require( '../validator/validations.js')
const schema = require('../validator/schema.js')
const config = require('../config/config')

class controller {
    constructor(service) {
        this.service = service;
        this.getAll = this.getAll.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);


        this.response = {
            success: true,
            message_en: "The transaction was completed successfully.",
            data: [],

        };
    }

    async getAll(req, res) {
        const getData = await this.service.getAll(req.query);
        this.response.data = getData.data;
        if (getData.error) return res.status(getData.statusCode).send(getData);
        return res.status(200).send(this.response);
    }


    async insert(req, res) {
      
        // Validation for requiest body
        const requestValidation = validations.verifySchema(
            schema[config.schema[this.constructor.name]],
            req.body
        );


        if (!requestValidation.success) {
            console.log('error from request validation: %s' + JSON.stringify(requestValidation));
            return res.status(400).send(requestValidation);
        }



        let insertData = await this.service.insert(req.body);
        this.response.data = insertData;
       
        if (insertData.error) return res.status(insertData.statusCode).send(insertData);
        return res.status(201).send(this.response);
    }

    async update(req, res) {


        // Validation for requiest body
        const requestValidation = validations.verifySchema(
            schema[config.schema[this.constructor.name]],
            req.body
        );


        if (!requestValidation.success) {
            console.log('error from request validation: %s' + JSON.stringify(requestValidation));
            return res.status(400).send(requestValidation);
        }

        const {
            id
        } = req.params;

        let updateData = await this.service.update(id, req.body);
        this.response.data = updateData;
        if (updateData.error) return res.status(updateData.statusCode).send(updateData);
        return res.status(202).send(this.response);
    }

    async delete(req, res) {
        const {
            id
        } = req.params;
        let deleteData = await this.service.delete(id);
        this.response.data = deleteData;
        if (deleteData.error) return res.status(deleteData.statusCode).send(deleteData);
        return res.status(202).send(this.response);
    }
}

module.exports =controller;