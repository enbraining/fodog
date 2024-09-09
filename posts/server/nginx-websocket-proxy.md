---
title: NGINX 웹소켓 프록시 추가하는 법
pubDate: 2024-06-19

tags: [nginx, proxy, webSocket]
category: 서버
---

# WebSocket Proxy

WebSocket Proxy의 경우 Ungrade, Connection 헤더가 추가적으로 필요하기 때문에 넣어줘야하기 때문에 다음과 같은 스크립트를 추가해주었다.

```sh
location /ws/chat {
    proxy_pass http://xxx.xxx.xxx.xxx:8080;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "Upgrade";
    proxy_set_header Host $host;
}
```

- `/ws/chat`: WebSocket의 경로
- `proxy_pass`: 요청이 전달될 서버의 URL
