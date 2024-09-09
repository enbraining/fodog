---
title: Docker MySQL 컨테이너 만들기
pubDate: 2024-07-17

tags:
  - docker
  - container
category: 서버
---

# 이미지 받아오기

```
docker pull mysql:latest
```

# 컨테이너

```
docker run --name mysql-1234 -e MYSQL_ROOT_PASSWORD=1234 -d -p 3306:3306 mysql:latest
```
