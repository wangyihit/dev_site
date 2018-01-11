let express = require("express");
let router = express.Router();
let urls = require("../common/urls");
let util = require("util");
/* GET home page. */
/* eslint no-unused-vars: 0 */
router.get("/", function(req, res, next) {
    /* eslint no-unused-vars: 1 */
    let link_area = "";
    for(let group in urls.available){
        let links = "";
        for(let key in urls.available[group]){
            let items = urls.available[group];
            let tmp = util.format("<li><a href_data='%s' href='javascript:void(0);' class='display_link' >%s</a></li>", items[key], key);
            links += tmp;
        }
        let block = util.format("<div><h3>%s</h3><div>%s</div></div>", group, links);
        link_area += block;
    }
    res.render("index", { title: "Dev home", links: link_area });
});

module.exports = router;
