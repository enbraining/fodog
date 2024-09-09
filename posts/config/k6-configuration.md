---
title: K6 사용해보기
pubDate: 2024-05-10

tags: [k6, testing]
category: 서버
---

# Commands

- `k6 new`: 자바스크립트 파일 생성
- `k6 run script.js`: script.js 실행하기
- `k6 run --vus 10 --duration 30s script.js`: 가상 유저의 개수와 시간을 설정해서 script.js 실행하기

## GET Request

```js
import { sleep } from 'k6';
import http from 'k6/http';

export const options = {
  vus: 10000,
  duration: '30s',
};

export default function () {
  http.get('http://localhost:8080/health');
}
```

## Socket Request

```js
import { check } from 'k6';
import ws from 'k6/ws';

export default function () {
  const url = 'ws://localhost:8080/ws/chat';

  const response = ws.connect(url, function (socket) {
    socket.on('open', function open() {
      console.log('connected');
      socket.send(`{"message":"hello"}`);

      socket.setInterval(function timeout() {
        socket.ping();
        console.log('Pinging every 1sec (setInterval test)');
      }, 1000);
    });

    socket.on('ping', function () {
      console.log('PING!');
    });

    socket.on('message', function (message) {
      console.log(`Received message: ${message}`);
    });

    socket.on('close', function () {
      console.log('disconnected');
    });

    socket.on('error', function (e) {
      if (e.error() != 'websocket: close sent') {
        console.log('An unexpected error occured: ', e.error());
      }
    });

    socket.setTimeout(function () {
      console.log('2 seconds passed, closing the socket');
      socket.close();
    }, 2000);
  });

  check(response, { 'status is 101': (r) => r && r.status === 101 });
}
```
