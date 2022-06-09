var supertest = require("supertest");
var should = require("should");
let movieModel = require('../model/movieModel');



var server = supertest.agent("http://localhost:3000");


describe("Movies Test", function () {
  it("It should GET movies", function (done) {
    server
      .get("/rest/api/v1/movie")
      .expect("Content-type", /json/)
      .expect(200)
      .end(function (err, res) {
        res.status.should.equal(200);
        done();
      });
  });

  it("It should CREATE movie", function (done) {
    let movie = {
      "name": "Superman",
      "description": "Best super action movie!",
      "releaseDate": "2021-01-15T06:31:15.000Z",
      "genres": "Animation",
      "duration": 20,
      "rating": 5
    }
    server
      .post('/rest/api/v1/movie')
      .send(movie)
      .expect("Content-type", /json/)
      .expect(201)
      .end(function (err, res) {
        res.status.should.equal(201);
        done();
      });
  });

  it("It should DELETE movie by given ID", function (done) {
    let movie = {
      "name": "Superman",
      "description": "Best super action movie!",
      "releaseDate": "2021-01-15T06:31:15.000Z",
      "genres": "Animation",
      "duration": 20,
      "rating": 5
    }
    let createdID
    server
      .post('/rest/api/v1/movie')
      .send(movie)
      .expect("Content-type", /json/)
      .expect(201)
      .end(function (err, res) {
        createdID = '/rest/api/v1/movie/' + res._body.data.item.id
        server
          .delete(createdID)
          .expect("Content-type", /json/)
          .expect(201).end(function (err, res) {
            done()

          })
      })

  });

  it('It should UPDATE movie by given ID', (done) => {
    let movie = {
      "name": "Superman",
      "description": "Best super action movie!",
      "releaseDate": "2021-01-15T06:31:15.000Z",
      "genres": "Animation",
      "duration": 20,
      "rating": 5
    }
    let updateMovie = {
      "name": "Superman",
      "description": "Best super action movie!",
      "releaseDate": "2021-01-15T06:31:15.000Z",
      "genres": "Animation",
      "duration": 20,
      "rating": 5
    }

    let createdID
    server
      .post('/rest/api/v1/movie')
      .send(movie)
      .expect("Content-type", /json/)
      .expect(201)
      .end(function (err, res) {
        createdID = '/rest/api/v1/movie/' + res._body.data.item.id
        server
          .put(createdID)
          .send(updateMovie)
          .expect("Content-type", /json/)
          .expect(201).end(function (err, res) {
            done()

          })
      })
  })
});

describe("Genres Test", function () {
  it("It should GET Genre", function (done) {
    server
      .get("/rest/api/v1/genre")
      .expect("Content-type", /json/)
      .expect(200)
      .end(function (err, res) {
        res.status.should.equal(200);
        done();
      });
  });

  it("It should CREATE genre", function (done) {
    let genre = {
      "name": "Animation",
      "description": "English Cartoons"
    }
    server
      .post('/rest/api/v1/genre')
      .send(genre)
      .expect("Content-type", /json/)
      .expect(201)
      .end(function (err, res) {
        res.status.should.equal(201);
        done();
      });
  });

  it("It should DELETE genre by given ID", function (done) {
    let genre = {
      "name": "Animation",
      "description": "English Cartoons"
    }
    let createdID
    server
      .post('/rest/api/v1/genre')
      .send(genre)
      .expect("Content-type", /json/)
      .expect(201)
      .end(function (err, res) {
        createdID = '/rest/api/v1/genre/' + res._body.data.item.id
        server
          .delete(createdID)
          .expect("Content-type", /json/)
          .expect(201).end(function (err, res) {
            done()

          })
      })

  });

  it('It should UPDATE genre by given ID', (done) => {
    let genre = {
      "name": "Animation",
      "description": "English Cartoons"
    }
    let updatedGenre = {
      "name": "Action",
      "description": "Action Movies"
    }

    let createdID
    server
      .post('/rest/api/v1/genre')
      .send(genre)
      .expect("Content-type", /json/)
      .expect(201)
      .end(function (err, res) {
        createdID = '/rest/api/v1/genre/' + res._body.data.item.id
        server
          .put(createdID)
          .send(updatedGenre)
          .expect("Content-type", /json/)
          .expect(201).end(function (err, res) {
            done()

          })
      })
  })
});