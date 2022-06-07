const mongoose = require("mongoose")
const { Schema } = require('mongoose')

class genreModel {
  constructor() {
    this.initSchema();
  }
  initSchema() {
    const schema = new Schema({
      name: {
        type: String
      },
      description: {
        type: String
      }
    });
    schema.set('toJSON', {
      transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      }
    });
    mongoose.model("genre", schema);
  }
  getInstance() {
    return mongoose.model("genre");
  }
}

module.exports = new genreModel;

