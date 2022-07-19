let express = require("express");
let router = express.Router();
const appConfig = require("../config/config");
let redisCache = appConfig.redisCache;
let respBase = {status: 0, msg:"", };
let respOK = JSON.stringify(respBase);



/* eslint no-unused-vars: 0 */

router.post("/ali_icon_position", function(req, res, next) {
    /* eslint no-unused-vars: 1 */
    try {
        let data = req.body;
        let obj = JSON.parse(data);
        let imageBase64 = obj.imageBase64;
        let top  = obj.top;
        let height = obj.height;


    }catch(e){
        let resp = {status: 1, msg: "" + e, };
        res.status(500).end(JSON.stringify(resp));
    }
    res.status(200).end(respOK);
});

module.exports = router;
