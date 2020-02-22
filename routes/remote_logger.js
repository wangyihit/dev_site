/**
 * Created by wangyi on 2/22/2020.
 */

let express = require("express");
let router = express.Router();

/*
*   
*   /log/
* */
/* eslint no-unused-vars: 0 */
router.post("/", function(req, res, next) {
    /* eslint no-unused-vars: 1 */
    console.log(req.body);
    res.status(200).end("OK"); 
});

module.exports = router;
