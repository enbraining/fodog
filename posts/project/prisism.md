---
title: Project. Prisism
pubDate: 2024-04-29

tags: [webSocket, kotlin, spring, ansible]
category: 프로젝트
---

[Github](https://github.com/fodo-developers/prisism-backend)

# 시작한 이유

랜덤채팅 서비스인 가가라이브를 알게 되었는데 사용해보니까 별 기능도 없고 디자인도 아쉬워서 직접 만들어보고 싶었다. 처음에 친구 한두명과 같이 하려고 했었지만 각자의 사정으로 혼자 개발하게된 프로젝트

## 내가 사용한 기술

기존에 익숙하게 사용하던 타입스크립트와 코틀린을 사용해서 개발을 진행하기로 했다.

| Cooperation | Frontend                | Backend          | DevOps         |
| ----------- | ----------------------- | ---------------- | -------------- |
| Discord     | Typescript              | Ktlint           | Nginx          |
| Linear      | React                   | Kotlin           | Github Actions |
| Github      | Next.js (14 App router) | Spring Boot      | PostgreSQL     |
|             | Day.js                  | Spring Data JPA  | AWS EC2        |
|             | SWR                     | Spring Websocket |                |
|             | Axios                   |                  |                |
|             | Styled Components       |                  |                |
|             | React Toastify          |                  |                |

## 문제 1: 돈이 없음

돈이 없는게 문제였다. 서버를 유지하기 위해 클라우드타입이라는 서비스를 사용했지만 해당 서비스의 프리티어의 경우 매일 1회 이상 꺼져서 수동으로 켜줘야하기 때문에 EC2 t2.nano 프리티어를 사용하였는데 메모리가 1GB로 너무 작기 때문에 스프링과 데이터베이스 등을 올려두기엔 서버에 부하가 생겼다.

- 메모리 스왑을 이용해서 인스턴스의 메모리를 3GB로 확장시켰다. [메모리 스왑](https://www.fodo.dev/posts/server/linux/aws-memory-swapping/)

## 문제 2: 접속자 수가 변경되지 않음

유저 수도 적은 상황에서 유저수가 0명 부근에서 계속 새로고침해주지 않으니까 사람들이 금방 나가버려서 유저 수를 유지하기가 힘들었다.

- SWR을 이용해서 유저 수를 10초마다 새로고침을 시켰다.

## 문제 3: 소켓이 갑자기 끊어짐

소켓이 유저가 나가지 않았음에도 자꾸 끊어지는 문제가 발생했다.

- 소켓은 특정 시간동안 응답이 없을 시 끊어진다는 것을 알았고, setInterval 함수를 이용해서 지속적으로 ping 메시지를 보내줬다.

- 하지만 클라이언트에서 핑 메시지를 보내면 각각의 클라이언트들의 요청이 백엔드 서버에 다른 간격으로 도착해서 유저가 8명만 넘어도 거의 1초마다 한번씩 핑 메시지가 서버로 도착했고, 서버에서 @Scheduled 애노테이션을 이용해서 핑 메시지를 보내는 것으로 해결했다.

## 문제 4: React Toastify 적용 안됨

라이브러리를 추가하자마자 toast 함수를 바로 써보니 적용이 되지 않았다. layout.tsx에 다음의 코드를 추가해서 고칠 수 있었다.

```ts
import 'react-toastify/ReactToastify.css';
```

## 문제 5: Nginx에서 WebSocket만 프록시 적용 안됨

기존에도 프록시가 적용돼있었는데 알고보니 WebSocket 프록시의 경우에는 Upgrade 요청을 서버로 전달하기 위한 Upgrade, Connection 헤더가 추가적으로 필요하다는 것을 알았고 다음의 스크립트를 추가해줬다.

```sh
location /ws/chat {
    proxy_pass http://xxx.xxx.xxx.xxx:8080;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "Upgrade";
    proxy_set_header Host $host;
}
```

## 문제 6: 매번 서버 설정을 해줘야함

현재 AWS 프리티어를 이용하고 있고 언제든 서버를 이동해야한다는 생각이 계속 생겼다.

- Ansible을 이용해서 미리 서버 환경을 스크립트로 만들고 언제 서버를 옮겨도 세팅을 바로 끝내고 작동할 수 있도록 만들었다.
