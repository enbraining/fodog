---
title: 대충 사용해보는 Uptime Kuma
pubDate: 2024-07-31

tags: [uptime, status]
category: 서버
---

# TL;DR

서버 상태 등을 모니터링 할 수 있는 툴이다. 도커나 포드맨으로 간단하게 바로 실행해볼 수 있다.

```sh
docker run -d --restart=always -p 3001:3001 -v uptime-kuma:/app/data --name uptime-kuma louislam/uptime-kuma:1
```

## 모니터링 추가하기

> 새로운 모니터링 추가하기 - URL 지정 - 알림 설정에서 디스코드 웹훅 설정 - 저장

다른 설정들도 있지만 간단하게는 위처럼만 설정해도 업타임 등을 확인할 수 있다. 임의로 서버를 중지시키고 디스코드를 확인해보면 웹훅 메시지도 확인해볼 수 있다.

![uptime](./images/uptime-kuma.png)
![discord](./images/discord-status.png)
