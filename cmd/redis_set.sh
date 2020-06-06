#!/bin/sh
url="http://127.0.0.1:3000/redis/hset"
redisKey="test::redis::sset"
curl -vvvvvvvv -X POST \
     -H "Content-Type: text/plain" \
     -d "{\"mname\": \"${redisKey}\", \"key\": \"testKey\", \"value\": \"testData\"}"  \
     ${url}
