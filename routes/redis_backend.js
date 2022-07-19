/**
 * Created by wangyi on 2/22/2020.
 */

let express = require("express");
let router = express.Router();
const redis = require("redis");
const appConfig = require("../config/config");
const util = require('util');
let redisCache = appConfig.redisCache;
// {url: 'redis://alice:foobared@awesome.redis.server:6380'}
const redisUrl = util.format("redis://:%s@%s:%i", redisCache.password, redisCache.host, redisCache.port);
const client = redis.createClient({url: redisUrl});

/* eslint no-unused-vars: 0 */
router.post("/hset", function(req, res, next) {
    /* eslint no-unused-vars: 1 */
    try {
        let data = req.body;
        let obj = JSON.parse(data);
        let mname = obj.mname;
        let key = obj.key;
        let v = obj.value;
        console.log(mname, key, v);
        client.hset(mname, key, v);
    }catch(e){
        res.status(500).end("" + e);
    }
    res.status(200).end("OK"); 
});

module.exports = router;
