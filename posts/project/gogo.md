---
title: Project. GOGO
pubDate: 2024-03-15

tags: [java, spring_batch, mysql, coolsms, querydsl]
category: 프로젝트
---

[Github](https://github.com/GSM-GOGO)

# 시작한 이유

학교 운동회를 조금 더 재미있게 즐기기 위해서 다양한 미니게임과 경기에 배팅할 수 있는 기능을 개발했다.

## 내가 사용한 기술

| Backend         |
| --------------- |
| Java            |
| Spring Boot     |
| Spring Security |
| Spring Data JPA |
| Spring Batch    |
| QueryDSL        |
| Redis           |
| MySQL           |

## Spring Batch

Spring Batch와 Cron Schedule을 사용하여 정각마다 모든 유저를 대상으로 인증 횟수, 미니게임 횟수 등을 초기화해주고 특정 경기에 응원중인 학생에게는 경기 시작 10분 전에 메시지로 경기 시작에 대한 알림을 보내주는 기능을 구현하였다.
