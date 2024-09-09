---
title: Golang 설치하기
pubDate: 2024-07-04

tags:
  - golang
category: 서버
---

# 설치하기

[Golang Download](https://go.dev/dl/)

자신의 운영체제에 맞는 파일을 다운로드한다. 나의 경우에는 MacOS ARM64를 다운로드해줬다. 파일을 열고 `Continue - Continue - Install - Close` 다른 버튼은 딱히 누를게 없었다.

# 실행하기

`go run ./main.go`를 통해서 실행시킬 수 있다.

```go
package main
import ("fmt")

func main() {
  fmt.Println("Hello World!")
}
```
