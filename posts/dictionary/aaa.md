---
title: AAA란?
pubDate: 2023-05-11

tags: [network]
category: CS
---

> Authentication, Authorization, Accouting
> 인증, 인가, 어카운팅으로 이루어짐

# About

- 네트워크 장치와 자원으로의 안전한 원격 접근을 제공한다.

# 특징

1. 중앙에서 다수의 라우터를 관리할 수 있는 인증 기능을 제공한다.
2. 유연한 인가 기능을 제공한다.
3. 사용량 또는 과금 정보를 제공한다.
4. 일반적으로 클라이언트와 서버로 구성되며, AAA 클라이언트는 인증, 인가, 어카운팅 서비스를 요청하며, 서버는 AAA 정보를 담고 있는 데이터베이스를 관리한다.

# 3가지 요소

## 인증

> 사용자가 네트워크 장치와 서비스에 접근하는 것을 허용하기 전에 식별하고 확인한다.

1. 사용자만 아는 지식을 이용해 인증하거나
2. 사용자가 가진 것을 이용해 인증하거나,
3. 사용자만이 가지고 있는 특징을 이용해 인증한다.

## 인가

> 인증을 마친 사용자의 권한과 접근 수준을 결정한다.

- 클라이언트가 서버에게 사용자가 무엇을 할 권한이 있는지 물어보고 서버는 사용자의 권한을 정의한 속성값 쌍을 돌려준다.

## 어카운팅

> 요금 부과, 감사, 리포팅을 할 목적으로 사용자의 행동을 기록한다.

- 어카운팅 AV 쌍으로 기록된 어카운팅 자료를 AAA 서버에 보낸다. AAA 서버는 이 정보를 중앙에 수집하여 저장한다.

# AAA 설정 순서

1. aaa new-model 전역 설정 명령을 사용해 AAA를 활성화한다.
2. 별도의 AAA 서버 RADIUS 등을 사용한다면 적절한 프로토콜 인자를 설정한다.
3. 원하는 서비스에 대한 적절한 방법 목록을 정의한다.
4. 원하는 인터페이스나 라인에 방법 목록을 적용한다.

# AAA 보안 프로토콜 종류

## RADIUS

> Remote Access Dial-In User Service

- RADIUS는 접근 서버 인증과 어카운팅 프로토콜로 개발되었다.
- TACACS+ 보다 CPU, 메모리 사용량이 적다.
- 다양한 네트워크에서 보안 프로토콜로 사용된다.

### 작동 순서

1. 원격 사용자가 어떤 서버에 접속한다. 그 어떤 특정한 서비스를 하는 서버는 사용자의 이름과 비밀번호를 얻는다.
2. 사용자 이름과 암호화된 비밀번호가 RADIUS 클라이언트(어떤 서버)에서 네트워크를 통해 RADIUS 서버로 전송된다.
3. RADIUS 서버는 사용자 계정 정보가 들어있는 데이터베이스를 뒤진다.
4. RADIUS 서버는 인증 정보를 확인한 후 결과를 바탕으로 REJECT, ACCEPT, CHALLENGE, CHANGE PASSWORD 중 하나의 행동을 한다.

## TACACS+

> Terminal Access Controller Access System

- TACACS+는 라우터 등을 통해 특정 서비스에 접근하고자 하는 사용자를 확인하기 위한 방법을 제공한다.
- 관리자가 직접 인증, 인가, 어카운팅 기능을 분리할 수 있도록 해서 각 서비스를 독립적으로 구현할 수 있다.

### 작동 순서

1. 연결이 맺어지면 특정 서비스를 하는 서버는 TACACS+ 서버에 연결해 인증 프롬포트를 얻는다. 이 인증 프롬포트는 사용자에게 출력되고 사용자는 비밀번호를 입력한다.
2. 이 비밀번호는 서버에서 동작중인 TACACS+ 데몬에게 전달된다.
3. TACACS+ 서버는 사용자 데이터베이스에게 클라이언트 A가 보낸 정보를 찾는다.
4. 특정 서비스를 하는 서버는 TACACS+ 데몬으로부터 ACCEPT, REJECT, ERROR, CONTINUE 중 하나의 응답을 받는다.