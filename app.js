let express = require("express");
let path = require("path");
let favicon = require("serve-favicon");
let logger = require("morgan");
let cookieParser = require("cookie-parser");
let bodyParser = require("body-parser");
let cors = require('cors')
let index = require("./routes/index");
let remoteLogger = require("./routes/remote_logger");
let redisBackend = require("./routes/redis_backend");
let users = require("./routes/users");
let qrcode = require("./routes/qrcode");
let app = express();
app.disable("x-powered-by");
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.text({limit: '50mb'}));
app.use(bodyParser.raw({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", index);
app.use("/users", users);
app.use("/qrcode", qrcode);
app.use("/log", remoteLogger);
app.use("/redis", redisBackend);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    "use strict";
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// error handler
/* eslint no-unused-vars: 0 */
app.use(function (err, req, res, next) {
    /* eslint no-unused-vars: 1 */
    "use strict";
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
