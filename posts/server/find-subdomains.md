---
title: 서브 도메인 목록 쉽게 조회해보기
pubDate: 2024-08-01

tags: [dns, domain]
category: 서버
---

# TL;DR

서브 도메인을 조회하기 위해서 subfinder라는 툴을 사용해볼 것입니다.

## 설치

[깃허브 링크](https://github.com/projectdiscovery/subfinder/releases/tag/v2.6.6)에서 자신의 운영체제에 맞는 파일을 다운로드해서 아래와 같은 스크립트를 실행하면 해당 도메인을 사용하는 모든 서브 도메인을 조회할 수 있다.

```
./subfinder -d fodo.dev
```
