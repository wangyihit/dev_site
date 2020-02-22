/**
 * Created by wangyi on 1/10/18.
 */
let QRCode = require("qrcode");
let res_type = require("../common/res_type");
let express = require("express");
var util = require("util");
let router = express.Router();
let urls = require("../common/urls");

/*
*    GET home page.
*   test url: /qrcode/s2i?ss=abc&t=du, /qrcode/s2i?ss=abc&t=i, /qrcode/s2i?ss=abc, /qrcode/s2i?ss=abc&t=dui
*
* */
/* eslint no-unused-vars: 0 */
router.get("/s2i", function(req, res, next) {
    /* eslint no-unused-vars: 1 */
    let qr_option = {width: 200};
    let text = req.query["ss"];
    let type = req.query["t"]? req.query["t"]: res_type.image.png.image;
    if(text === undefined){
        let data = {"code":1, "msg":"no data input"};
        res.status(200).json(data);
        return;
    }
    if(type === res_type.image.png.image) {
        // res.header("Content-Type", res_type.image.png.content_type);
        res.type(res_type.image.png.type);
        QRCode.toFileStream(res, text, qr_option);
        return;
    } else {
        QRCode.toDataURL(text, qr_option, function (err, url) {
            let data = "";
            if(err){
                data = res_type.json.failed(res_type.res_code.default_error, "create qrcode failed");
                res.status(200).json(data);
            }else{
                if(type === res_type.image.png.data_url){
                    data = res_type.json.success();
                    data.data = {"url": url};
                    res.status(200).json(data);
                    return;
                } else {
                    data = util.format("<img src='%s' />", url);
                    res.type("html");
                    res.status(200).end(data);
                    return;
                }
            }
        });
    }
});


function reg_url() {
    function reg(n, u){
        "use strict";
        return urls.add_url("qrcode", n, u);
    }
    reg("qrcode data url", "/qrcode/s2i?ss=abc&t=du");
    reg("qrcode data image", "/qrcode/s2i?ss=abc&t=i");
    reg("qrcode default", "/qrcode/s2i?ss=abc");
    reg("qrcode html", "/qrcode/s2i?ss=abc&t=dui");
}
reg_url();
module.exports = router;