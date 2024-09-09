---
title: Vercel 대소문자 변경 반영안됨
pubDate: 2024-07-31

tags: [vercel, nextjs]
category: 서버
---

# TL;DR

Git은 기본적으로 파일명에서 대소문자만 변경한 것은 반영시킬 수 없기 때문이다. 아래의 명령어를 통해서 파일명에서 대소문자를 구분할 수 있도록 할 수 있다.

## 해결

```sh
git config core.ignorecase false
```
