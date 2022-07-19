#!/bin/sh
cookie="$1"
dest="$2"
url="$3"
curl "$url" \
-H 'authority: api2.ali213.net' \
-H 'cache-control: max-age=0' \
-H 'upgrade-insecure-requests: 1' \
-H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36' \
-H 'sec-fetch-dest: document' \
-H 'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9' \
-H 'sec-fetch-site: none' \
-H 'sec-fetch-mode: navigate' \
-H 'sec-fetch-user: ?1'  \
-H 'referer: https://i.ali213.net/signin.html?redirect=https%3A%2F%2Fgame.ali213.net%2F' \
-H 'accept-language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6' \
-H "cookie: $cookie" \
--compressed \
-o "$dest"

