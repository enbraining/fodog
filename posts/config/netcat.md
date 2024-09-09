---
title: netcat 설치 및 사용
pubDate: 2024-06-22

tags: [network]
category: 서버
---

# TL;DR

클라이언트가 이 프로그램과 통신하기 위해서 사용하는 도구 중 하나가 nc(netcat)입니다.

## Installation

```sh
sudo apt update && sudo apt install netcat
```

## How to use

```sh
$ nc google.com 80 # google.com 80 포트로 연결을 요청한다.
GET / HTTP/1.1     # / 경로의 HTTP/1.1 버전을 사용할 것을 알린다.
​                   # 엔터를 누른다.
HTTP/1.1 200 OK
Date: Thu, 01 Dec 2022 02:30:32 GMT
Expires: -1
Cache-Control: private, max-age=0
Content-Type: text/html; charset=ISO-8859-1
Cross-Origin-Opener-Policy-Report-Only: same-origin-allow-popups; report-to="gws"
...
```

## DreamHack

```sh
$ nc host3.dreamhack.games 16415
Enter "Dreamhack" : Dreamhack
Welcome Beginners!
DH{...}
```
