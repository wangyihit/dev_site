/**
 * Created by wangyi on 3/18/2020.
 */

let AppConfig = {};

let redisCache = {};
redisCache.host = "127.0.0.1";
redisCache.port = 6379;
redisCache.password = "123456"
AppConfig.redisCache = redisCache;

module.exports = AppConfig;

