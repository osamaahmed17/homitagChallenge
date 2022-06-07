const mongoose = require("mongoose")
const { Schema } = require('mongoose')

class movieModel {
  constructor() {
    this.initSchema();
  }
  initSchema() {
    const schema = new Schema({
      name: {
        type: String
      },
      description: {
        type: String,
      },
      releaseDate: {
        type: Date,
      },
      genres: {
        type: String,
      },
      duration: {
        type: Number,
      },
      rating: {
        type: Number
      }
    });
    schema.set('toJSON', {
      transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      }
    });
    mongoose.model("movie", schema);
  }
  getInstance() {
    return mongoose.model("movie");
  }
}

module.exports = new movieModel;
