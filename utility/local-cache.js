const NodeCache = require('node-cache')
const expireSeconds =  3600
const checkperiod = 0

const localCache = new NodeCache({stdTTL:expireSeconds,checkperiod,useClones:false})
localCache.on( "expired", ( key, value )=>{
    console.log(`The local cache's value with the key ${key} has expired within the last 1 hour !`)
});

module.exports = localCache