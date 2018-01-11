/**
 * Created by wangyi on 1/11/18.
 */

let urls = {
    "available": {},
    "add_url": function (group, name, url) {
        if(typeof urls.available[group] === "undefined"){
            urls.available[group] = {};
        }
        urls.available[group][name] = url;
    },
};


module.exports = urls;