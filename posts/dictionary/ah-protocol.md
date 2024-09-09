---
title: AH Protocol이란?
pubDate: 2023-09-11

tags: [network]
category: CS
---

> Authentication Header

# 특징

- 발신지 호스트를 인증하고 IP 패킷의 무결성을 보장합니다.
- 인증을 위해서 해시함수와 대칭키가 사용되어 Message Digest를 생성하고 헤더에 삽입한다.
- 인증과 무결성을 보장하지만 비밀은 보장해주지 않는다.

# 구성

![](https://blog.kakaocdn.net/dn/cylnRH/btqFbkFkJ7D/RBkwmq8yHwSwXklaIx3I3K/img.png)

1. Next Header : 헤더의 프로토콜 (TCP | UDP | ICMP)
2. Payload Length : 인증 헤더의 길이
3. Security Parameter Index : Security Association에 대한 식별자
4. Sequence Number : replay attack을 방지한다.
5. Authentication Data : 헤더를 포함하여 전체 패킷에 대한 인증 데이터를 만든다. 이때 TTL 같은 IP 헤더의 변경될 수 있는 데이터를 제외하고 만든다.
