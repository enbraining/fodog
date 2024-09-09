---
title: How to set Linux Environment Variables
pubDate: 2024-06-19

tags: [linux]
category: 서버
---

# 리눅스 환경변수 설정

`vim ~/.bashrc`으로 파일에 들어가서 마지막 줄에 다음과 같이 환경변수를 추가해주면 됩니다.

```bash
export TEST_ONE=hello
```

## 환경변수를 불러올 수가 없어요!

`source ~/.bashrc`를 통해서 다시 불러와주면 사용할 수 있습니다.
