---
title: 쿠키가 무엇인가?
pubDate: 2024-07-03

tags: [cookie, localStorage, network]
category: CS
---

# 쿠키가 무엇인가?

HTTP의 Connectionless와 Stateless 2가지 특징 때문에 서버에서 클라이언트를 기억할 수 없다. 이런 HTTP에서 상태를 유지하기 위해서 Key-Value 형식의 쿠키가 사용된다.

> Connectionless. 하나의 요청에 하나의 응답을 한 이후에는 연결을 끊는다.

> Stateless. 통신이 끝난 후에는 상태 정보를 저장하지 않는다.

## 변조

하지만 클라이언트에서 쿠키를 변조해서 다른 사용자를 사칭하는 등의 악의적인 요청을 보낼 수 있으므로 서버에서 검증하는 로직이 필요하다.

## 쿠키 굽기 (Set-Cookie, Cookie)

쿠키를 생성하기 위해서는 서버에서 HTTP Response Header에 Set-Cookie를 포함해야한다.

```http
HTTP/1.0 200 OK
Content-type: text/html
Set-Cookie: theme=dark
Set-Cookie: author=enbraining

[page content]
```

이렇게 생성된 쿠키는 서버로 전송되는 모든 요청의 Cookie 헤더에 포함된다.

```http
GET /index.html HTTP/1.0
Host: www.fodo.dev
Cookie: theme=dark; author=enbraining
```

## 쿠키는 언제 죽나 (Life Cycle)

- Session Cookie

세션 쿠키는 `Expires`, `Max-Age` 속성이 없는 쿠키로 현재 세션이 끝나면 삭제된다.

- Persistent Cookie

영속적 쿠키는 `Expires` 속성이 있다면 명시된 시간에 삭제되고, `Max-Age` 속성이 있다면 명시된 기간 이후에 삭제된다.

## 보안

```HTTP
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly
```

- Secure Cookie

쿠키에 `Secure`을 추가해서 사용하며, HTTPS 프로토콜일 경우에만 사용할 수 있다.

- HttpOnly Cookie

쿠키에 `HttpOnly`를 추가해서 사용하며, HttpOnly 쿠키는 Document.cookie API를 사용할 수 없다. 서버에 전송하기 위한 용도로만 사용한다.

## 쿠키의 스코프

쿠키를 전송해야할 호스트를 지정하기 위해서 쿠키에 `Domain`를 사용한다. 명시하지 않는다면 서브도메인을 포함하지 않는 현재 위치의 호스트를 기준으로 한다.

```http
Domain=fodo.dev
```

다음과 같이 명시했다면 test.fodo.dev 같은 서브도메인도 포함한다.

쿠키를 전송해야할 경로를 지정하기 위해서 쿠키에 `Path`를 사용한다. 예를 들어 Cookie 헤더에 `Path=/about`이 포함되어 있다면 `/about/**`이 포함된다.
