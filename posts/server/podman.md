---
title: Podman이란?
pubDate: 2024-03-02

tags: [podman, container]
category: 서버
---

# 요약

Podman(Pod Manager tool)은 OCI 표준 컨테이너와 런타임 개발과 관리, 실행할 수 있게 해주는 컨테이너 엔진이다. Docker를 대체할 수 있는 기술 중 하나로 Docker와 문법적인 차이가 크지 않다.

## Daemon-less

Podman은 Docker와 다르게 Daemon이 없다. Daemon은 복잡한 작업을 위한 백그라운드 프로세스로 사용자와 컨테이너 사이에서 중계자의 역할을 한다. Daemon은 컨테이너를 쉽게 관리하기 위한 방법 중 하나이지만, Daemon들은 루트 권한으로 통해 실행되기에 문제가 발생할 수 있다.

Podman은 Daemon과 상호작용(`사용자 - Daemon - 컨테이너`)할 필요없이 루트리스(`사용자 - 컨테이너`) 컨테이너를 사용할 수 있습니다. 루트리스 컨테이너로 사용자는 루트 권한 없이도 컨테이너를 관리할 수 있습니다.

## 명령어

명령어 대부분이 Docker와 비슷하다.

- `podman ps`: 컨테이너 목록을 확인하기

- `podman pull postgres:latest`: postgreSQL 이미지 받아오기

- `podman images`: 이미지 목록을 확인하기

- `podman run -d -p 6543:5432 --name test-postgres -e POSTGRES_PASSWORD=1234 postgres:latest`: 백그라운드에서 외부 6543, 내부 5432로 test-postgres라는 이름의 컨테이너를 postgres 이미지로 실행한다.
