---
title: 재귀함수에 대해 알아보자
pubDate: 2024-07-24

tags: [cpp]
category: 알고리즘
---

# TL;DR

재귀함수는 자신을 재참조하는 함수이다. 큰 문제를 부분 문제로 나눠서 풀 때 주로 사용하며, 재귀함수에는 반드시 기저사례가 포함되어 있어야 한다. 또한 기존의 값이 다시 반복되는 등의 반복되는 사이클이 있다면 사용하면 안된다. 보통 반복문과 재귀함수가 둘 다 가능한 상황에선 반복문을 쓰는 것이 더 빠르다.

## 팩토리얼

```cpp
#include <iostream>

using namespace std;

int fact(int n){
    if(n == 0 || n == 1) return 1;
    return n * fact(n - 1);
}

int main() {
    int result = fact(6);
    cout << result;
}
```

## 피보나치 수열

```cpp
#include <iostream>

using namespace std;

int fibo(int n){
    if(n == 0 || n == 1) return n;
    return fibo(n - 2) + fibo(n - 1);
}

int main() {
    int result = fibo(6);
    cout << result;
}
```
