---
title: SOP 메커니즘을 알아보자 (with CORS)
pubDate: 2024-07-04

tags: [sop, cors, network]
category: CS
---

# Same Origin Policy

출처가 다른 애플리케이션과 통신하는 것을 제한하지 않는다면 공격을 통해 다른 사용자의 정보가 탈취될 수 있을 것이다. 이러한 상황을 방지하기 위해서 출처가 다른 애플리케이션과 리소스를 공유하는 것을 제한하는 정책을 SOP라고 한다.

서로 다른 출처인지를 구분하는 Origin은 Scheme, Host, Port로 구성되며 `https://fodo.dev:1513`이라는 사이트와 비교한다고 했을때 Scheme(https), Host(fodo.dev), Port(1513)이 모두 일치해야 Same Origin이라고 할 수 있다. 만약 하나라도 다르다면 Cross Origin으로 구분된다.

# Cross Origin Resource Sharing

하지만 서브 도메인이 다르거나 백엔드 서버와 클라이언트 서버의 origin이 다른 경우 등 출처가 다른 데이터를 처리해야하는 경우도 있기 때문에 특정 출처에 대한 공유를 허용하는 CORS가 사용된다.

요청할 때 CORS 헤더를 추가해서 요청하면 요청받은 서버에서는 보내진 CORS 헤더에 따라 요청을 허용한다.

| 헤더                             | 설명                                          |
| -------------------------------- | --------------------------------------------- |
| Access-Control-Allow-Origin      | 해당하는 Origin에서 들어오는 요청만 처리한다. |
| Access-Control-Allow-Methods     | 해당하는 메소드의 요청만 처리한다.            |
| Access-Control-Allow-Credentials | 쿠키 사용 여부를 판단한다.                    |
| Access-Control-Allow-Headers     | 해당하는 헤더의 사용 가능 여부를 나타낸다.    |
