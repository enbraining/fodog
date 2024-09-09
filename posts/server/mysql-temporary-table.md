---
title: MySQL 임시 테이블 사용하기
pubDate: 2024-05-10

tags: [database]
category: 서버
---

# 임시 테이블

임시 테이블이란 특정 유저가 접속한 세션 안에서만 생성하고 조회할 수 있는 임시 테이블임

- DML을 사용할 수 있음
- 세션이 끊기면 테이블 DROP
- 잠깐 사용하는 데이터를 처리할 때 유용함.
  - 중간 데이터 처리
  - None-temporary 대비 UPDATE 속도 향상

## 사용하기

- 테이블 생성하기

```
CREATE TEMPORARY TABLE [IF NOT EXISTS] table-name (
    column_definition,
    ...
    table_constraints
)
```
