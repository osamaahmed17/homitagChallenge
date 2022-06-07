module.exports=
    {
        "dbConnection":"mongodb://osamaahmed17:osamaahmed17@hackfest-shard-00-00.bhrym.mongodb.net:27017,hackfest-shard-00-01.bhrym.mongodb.net:27017,hackfest-shard-00-02.bhrym.mongodb.net:27017/?ssl=true&replicaSet=atlas-574kto-shard-0&authSource=admin&retryWrites=true&w=majority",
       
            "mongoModel": {
                "movies": {
                    "masterDataCache": false,
                    "cacheList": true,
                    "cacheKey": "userList",
                    "cacheName": "ConfigurationCache",
                    "hasLocation": false
                },
                "genres": {
                    "masterDataCache": false,
                    "cacheList": true,
                    "cacheKey": "userList",
                    "cacheName": "ConfigurationCache",
                    "hasLocation": false
                }
            },
 
            "schema": {
                "movieController": "MOVIE_SCHEME",
                "genreController": "GENRE_CONTROLLER"
            },
            "updateSchema": {
                "movieController": "MOVIE_SCHEME",
                "genreController": "GENRE_CONTROLLER"
        }
        
    }