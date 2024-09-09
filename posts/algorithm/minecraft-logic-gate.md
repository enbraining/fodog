---
title: 마인크래프트로 알아보는 논리 게이트
pubDate: 2024-07-01

tags: [minecraft, logicGate]
category: 알고리즘
---

# TL;DR

학교에서 논리 게이트에 대해 이미 배운 적은 있지만 마인크래프트 레드스톤을 사용해서 구현해보고 싶었다.

## NOT

입력에 대한 반전을 출력한다. 블럭에 붙어있는 레드스톤 토치의 상태는 블럭 뒤의 입력의 반전이다.

| A   | Result |
| --- | ------ |
| 0   | 1      |
| 1   | 0      |

![NOT](/posts/not-gate.png)

## AND

블럭 벽에 붙어있는 레드스톤 토치는 가운데 있는 레드스톤이 꺼졌을 때 켜진다. 만약에 입력 2개가 1이라면 출력은 1이 된다.

| A   | B   | Result |
| --- | --- | ------ |
| 0   | 0   | 0      |
| 0   | 1   | 0      |
| 1   | 0   | 0      |
| 1   | 1   | 1      |

![AND](/posts/and-gate.png)

## OR

두 입력 중 하나라도 1이라면 레드스톤 램프가 켜진다.

| A   | B   | Result |
| --- | --- | ------ |
| 0   | 0   | 0      |
| 0   | 1   | 1      |
| 1   | 0   | 1      |
| 1   | 1   | 1      |

![OR](/posts/or-gate.png)

## XOR

모든 입력이 0이라면 중지 손가락 양쪽에 있는 레드스톤 토치가 켜져서 A와 B가 꺼지고, 모두 1이라면 중지 손가락에 있는 레드스톤 토치가 켜져서 A와 B가 꺼진다. 하나만 켜져있는 경우에는 중지 손가락에 있는 레드스톤 토치가 켜지지 않으면서 A와 B 둘 중 하나가 켜져 램프가 켜지게 된다.

| A   | B   | Result |
| --- | --- | ------ |
| 0   | 0   | 0      |
| 0   | 1   | 1      |
| 1   | 0   | 1      |
| 1   | 1   | 0      |

![XOR](/posts/xor-gate.png)

## NAND

입력이 둘 다 꺼지는 경우에만 램프가 꺼진다.

| A   | B   | Result |
| --- | --- | ------ |
| 0   | 0   | 1      |
| 0   | 1   | 1      |
| 1   | 0   | 1      |
| 1   | 1   | 0      |

![NAND](/posts/nand-gate.png)

## NOR

입력 중 하나라도 켜진다면 레드스톤 토치가 꺼지면서 램프도 꺼지게 된다.

| A   | B   | Result |
| --- | --- | ------ |
| 0   | 0   | 1      |
| 0   | 1   | 0      |
| 1   | 0   | 0      |
| 1   | 1   | 0      |

![NOR](/posts/nor.gate.png)

## XNOR

XOR + NOT

| A   | B   | Result |
| --- | --- | ------ |
| 0   | 0   | 1      |
| 0   | 1   | 0      |
| 1   | 0   | 0      |
| 1   | 1   | 1      |

![XNOR](/posts/xnor-gate.png)