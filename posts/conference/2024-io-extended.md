---
title: 2024 송도 IO Extended
pubDate: 2024-07-27

tags:
  - google
category: 컨퍼런스
---

# 스폰서

JNPMEDI: 임상시험 데이터 관리 및 운영 효율화 SaaS
AIR PREMIA LABS: 항공 관련
Mondrian AI: MLOps 지원

## 일정

Flutter 컨퍼런스 : Future 2024 09/28

## 에어프레미아는 왜 재개발을 하는가?

> 에어프레미아랩스 김성훈 - BE

- 항공 도메인: FSC(Full Service), LCC(Low Cost)
- HSC(Hybrid Service): 다양한 노선을 제공하면서도 저렴한 가격, FSC + LCC
- Navitaire: 각 항공사는 각 기업마다 항공 정보 DB를 가지고 있는 것이 아니라 정보를 제공하는 항공 정보 API가 존재한다.

에어프레미아는 HSC을 도전하는 기업이며, 그중 에어프레미아 랩스는 에어프레미아를 기술적으로 혁신시키기 위한 곳이다. 가장 큰 프로덕트로는 에어프레미아 사이트가 있으며 기존에는 FE BE를 분류하지 않고 JSP 기반으로 개발되었다.

하지만 FE BE의 경계가 불문명해서 이슈가 생겼을 떄 어디에서 문제가 발생했는지 추척하기 힘들었고, 그렇기에 시간 비용또한 추가로 발생하였다.

- Java -> Kotlin
- FE + BE -> FE / BE
- -> Navitaire API와의 커넥션 풀 관리

- FE shuka, BE onepoint
- 멀티모듈화
- 자체적인 오류 코드 체계화

에어프레미아 랩스 BE 채용

## 올리브영 전시 영역의 꺾이지 않는 안정성

> 올리브영 김우경 - BE

위의 섹션과 같이 레거시는 FE + BE 이었다. 또한 장애가 전파되는 문제가 있었기 때문에 모놀리식에서 MSA로 전환되었다.

CPU Spike, Cache Stampede 현상, LCP & FCP

- Redis 캐시 서버 구축 (Cache-Aside 패턴)
- MSA 분리

MongoDB의 장점: Schemaless(스키마가 없는 데이터 구조) 등

써킷브레이커 패턴을 이용한 장애 전파를 방지하는 중이다. (캐시 접근 불가 -> MongoDB 접근 불가 -> DB 접근) 캐싱 등의 전략을 이용한 유저 경험의 증진을 확보했다.

- 일관된 컨벤션, 코드 리뷰, 단위 테스트를 위해 꾸준한 노력이 필요하다.
- 안정적인 시스템 구축은 기술만으로 이루어지지 않는다.

## 어쩌다보니 Python 컨트리뷰터가 되었던 건에 대하여

> 이예성 Issac-Lee, 쎄드렉아이 DevOps

오픈소스에 기여하기 위해서 이슈에 문제를 남기고, 그것을 해결하기 위한 브랜치를 PR하는 까지의 과정이 있었다. 이슈의 내용으로 Documentation 오타 등이 될 수도 있다.

Python 인터프리터 구현을 위해서 Python Documentation을 확인하게 되었고, 문서에는 파이썬의 동작 과정, 언어 문서 등의 설명들이 있었다. (expression, 연산 처리 등) -> 새로운 언어를 만드는 프로젝트를 개발 중이었는데 도움이 될 것 같다.

- 모든 값을 Object로 취급한다.
- 파이썬 인터프리터 필수 구현 사항에 GC가 포함되어있지 않다.
- OCaml = ObjectCaml Lang (주로 분석에 쓰임)
- 인터프리터도 테스트 코드가 존재

## 100명의 개발자 분들을 도와 100개 넘는 오픈소스 PR을 만들고 세상을 함께 바꿔가는 이야기

- 졸렸다.

## 왜 내가 만든 쿼리는 항상 느릴까?

- Optimizer의 관점으로 쿼리를 짜야한다.
- DB는 쿼리만으로도 어느정도는 성능 예측이 가능하다.
- Clustred & Non-Clustred index

## Spring AI 어쩌고

- 밥 먹었다.
