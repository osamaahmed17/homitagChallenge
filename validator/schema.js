module.exports =
{
  " MOVIE_SCHEMA": {
    "title": "Movie",
    "description": "Movie schema",
    "type": "object",
    "additionalProperties": false,
    "properties": {
      "name": {
        "type": "string"
      },
      "description": {
        "type": "string",
      },
      "releaseDate": {
        "type": "date",
      },
      "genres": {
        "type": "string",
      },
      "duration": {
        "type": "number",
      },
      "rating": {
        "type": "number"
      }
    }
  },


  "GENRE_SCHEMA": {
    "title": "Genre",
    "description": "Genre schema",
    "type": "object",
    "additionalProperties": false,
    "properties": {
      "name": {
        "type": "string"
      },
      "description": {
        "type": "string"
      }
    }
  }
}

