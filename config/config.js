/**
 * Created by wangyi on 3/18/2020.
 */

let AppConfig = {};

let redisCache = {};
redisCache.host = "pi3";
redisCache.port = 6379;
AppConfig.redisCache = redisCache;

module.exports = AppConfig;

