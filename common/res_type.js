/**
 * Created by wangyi on 1/11/18.
 */
let res_code = {
    "success": 0,
    "unknown_error": -1,
    "default_error": -2,
};
let res_type = {
    "image": {
        "png" : {
            "image": "i",
            "data_url": "du",   // data::xxx
            "data_url_test": "dui",  // html, with data url
            "content_type": "image/png",
            "type": "png",
        }
    },
    "json": {
        "success": function () {
            return {"code": 0, "msg":"ok"};
        },
        "failed": function (code, msg) {
            return {code, msg};
        },
        "type": "json",
    },
    "res_code": res_code,
};

module.exports = res_type;