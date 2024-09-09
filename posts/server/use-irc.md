---
title: IRC 설치 및 사용해보기
pubDate: 2024-06-22

tags: [irc]
category: 서버
---

# TL;DR

Internet Relay Chat은 실시간 채팅 프로토콜으로 그룹 및 1:1 소통, 파일 공유를 가능하게 해준다. 그냥 한번 써보고 싶었다.

## Installation

컨테이너를 만들고 직접 설정해도 되지만 이미지가 이미 있다.

```sh
docker run --name ircd -p 6667:6667 inspircd/inspircd-docker
```

## Connection

다음과 같은 예시처럼 irssi를 설치해주고 접속해주면 된다. 이제 접속해서 방을 만들기 위해서 `/join <name>`을 써주면 방을 생성할 수 있다.

```sh
# apt, etc...
brew install irssi

# 접속하기
irssi -c 127.0.0.1 -p 6667 -n <username>

# 방 만들기 혹은 들어가기
/join hello
```

## Servers

- [우분투한국커뮤니티 IRC](https://wiki.ubuntu-kr.org/index.php/IRC_%EC%9D%B4%EC%9A%A9_%EC%A0%95%EB%B3%B4)
- [Libera.chat IRC](https://libera.chat/)
- [Popular IRC Networks](https://www.irchelp.org/networks/popular.html)
