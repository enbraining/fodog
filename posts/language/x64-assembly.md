---
title: x64 어셈블리어
pubDate: 2024-06-24

tags:
  - assembly
category: 알고리즘
---

# TL;DR

CPU에 사용되는 ISA는 다양하고 ISA마다 어셈블리어도 조금씩 차이가 있다.

## 구조

명령어(opcode)와 피연산자(operand)로 구성된다.

```asm
mov eax, 3
opcode operand1 operand2
```

## 피연산자

피연산자에는 Memory, Immudiate Value, Register 총 3가지가 올 수 있습니다.

```asm
; 메모리 피연산자

; 0x8048000의 데이터를 8 byte만큼 참조
QWORD PTR [0x8048000]

; 0x8048000의 데이터를 4 byte만큼 참조
DWORD PTR [0x8048000]

; rax가 가르키는 주소의 데이터를 2 byte만큼 참조
WORD PTR [rax]
```

## 명령어

### 데이터 이동

- `mov dst, src`: src에 들어있는 값을 dst에 저장한다.

| 명령어                        | 설명                                         |
| ----------------------------- | -------------------------------------------- |
| mov rdi, rsi                  | rsi의 값을 rdi에 대입                        |
| mov QWORD PTR[rdi], rsi       | rsi의 값을 rdi가 가리키는 주소에 대입        |
| mov QWORD PTR[rdi+8*rcx], rsi | rsi의 값을 rdi+8\*rcx가 가리키는 주소에 대입 |

- `lea dst, src`: src의 EA(Effective Address)를 dst에 대입한다.

| 명령어               | 설명                     |
| -------------------- | ------------------------ |
| lea rsi, [rbx+8*rcx] | rbx+8\*rcx 를 rsi에 대입 |

## 산술 연산

덧셈, 나눗셈 등이다.

- `add dst, src`: dst에 src를 더한다.

| 명령어                | 설명                          |
| --------------------- | ----------------------------- |
| add eax, 3            | eax에 3을 더한다.             |
| add ax, WORD PTR[rdi] | ax에 `*(WORD *)rdi`를 더한다. |

- `sub dst, src`: dst에서 src를 뺀다.

| 명령어                | 설명                          |
| --------------------- | ----------------------------- |
| sub eax, 3            | eax에서 3을 뺀다.             |
| sub ax, WORD PTR[rdi] | ax에서 `*(WORD *)rdi`를 뺀다. |

- `inc op`: op의 값을 1 증가시킨다.

| 명령어  | 설명              |
| ------- | ----------------- |
| inc eax | eax에 1을 더한다. |

- `dec op`: op의 값을 1 감소시킨다.

| 명령어  | 설명              |
| ------- | ----------------- |
| dec eax | eax에서 1을 뺀다. |

## 논리 연산

and, or, not 등이다.

- `and dst, src`: dst와 src의 비트가 모두 1이면 1, 아니면 0이다.

```asm
and 0xffff0000 0xcafebabe ; 0xcafe0000
```

- `or dst, src`: dst와 src의 비트 중 하나라도 1이면 1, 아니면 0이다.

```asm
and 0xffff0000 0xcafebabe ; 0xffffbabe
```

- `xor dst, src`: dst와 src의 비트가 서로 다르면 1, 같으면 0이다.

```asm
xor 0xffffffff 0xcafebabe ; 0x35014541
```

- `not op`: op의 비트를 전부 반전시킨다.

```asm
xor 0xffffffff ; 0x00000000
```

## 비교 연산
