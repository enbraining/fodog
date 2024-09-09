---
title: C언어 메모리 영역
pubDate: 2024-06-23

tags:
  - linux
  - cpp
category: 알고리즘
---

# TL;DR

리눅스에서 각 메모리 영역은 용도에 따라 나눠져있다.

## Code

실행할 수 있는 코드가 저장되는 영역이다.

```c
int main (){ return 1; } // 해당 함수가 컴파일되면 코드 세그먼트에 저장된다.
```

## Rodata (Read-only data)

값이 변하지 않는 전역 상수와 같은 데이터가 저장되는 영역이다.

```c
const int EXAMPLE = 5;
char[] string = "readonly"; // 상수 문자열로 취급된다.
```

## Data

쓰기 가능한 전역 변수가 저장되는 영역이다.

```c
int example = 5;
```

## BSS

컴파일 시점에 값이 정해지지 않는 초기화되지 않은 전역변수와 같은 데이터가 저장되는 영역이다.

```c
int example;
```

## Heap

실행 중에 동적으로 할당되는 데이터가 저장되는 영역이다.

```c
int *ptr = (*int) malloc(sizeof(int) * 4);
```

## Stack

함수의 파라미터나 지역 변수같은 데이터가 저장되는 영역이다.

```c
void say(int name){
	int status = 404;
}
```
