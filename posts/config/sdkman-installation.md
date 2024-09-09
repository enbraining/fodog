---
title: SDKMAN 설치 및 구성하기
pubDate: 2024-06-19

tags: [sdkman, jdk]
category: 서버
---

# 설치하기

아래의 명령어를 터미널에 입력해서 SDKMAN을 설치해줍니다.

```bash
curl -s "https://get.sdkman.io" | bash
```

## 설치 중에 일어나는 에러

다만 설치하다가 다음과 같은 에러가 나서 멈출 수도 있습니다. 그건 SDKMAN을 설치하는데 필요한 추가적인 프로그램을 찾을 수 없어서 생기는 에러입니다. `sudo apt install <마지막에 뜬 찾을 수 없는 프로그램>`을 사용해서 없는 프로그램을 설치할 수 있습니다.

```
Looking for a previous installation of SDKMAN...
Looking for unzip...
Looking for zip...
Not found.
```
