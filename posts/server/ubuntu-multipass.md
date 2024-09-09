---
title: Ubuntu Multipass 사용하기
pubDate: 2024-09-09
tags: [linux, ubuntu]
category: 서버
---

Canonical에서 만들어진 Ubuntu VM 워크스테이션으로, 데스크탑에서 Ubuntu VM을 사용할 때 같은 카테고리는 아니지만 VirtualBox, Docker 등의 애플리케이션보다 더욱 편리하고 가볍게 사용할 수 있다는 장점이 있습니다.

# 설치하기

아래의 링크에서 다운로드받을 수 있으며, Linux, Windows, MacOS를 지원합니다.

[다운로드](https://multipass.run/install)

# 사용하기

## VM 생성하기

```
multipass launch -n example-vm-1
```

## VM 접속하기

```
multipass shell example-vm-1
```

## VM 정보

```
multipass info example-vm-1
```

## VM 삭제

```
multipass delete example-vm-1
```
