---
title: 폰 노이만 구조에 대해 알아보자
pubDate: 2024-06-23

tags: [architecture]
category: 알고리즘
---

# TL;DR

컴퓨터 과학자 중 한명인 폰 노이만은 컴퓨터의 구조에서 **연산, 제어, 저장** 세가지의 핵심 기능으로 구성되어있다고 생각했다. 요즘 컴퓨터에서도 폰 노이만 구조를 크게 벗어나지 않으며 연산과 제어를 위한 **CPU**, 저장을 위한 **Memory**, 장치 사이에서 신호를 교환하기 위한 **Bus**를 사용한다.

## CPU

프로세스의 코드를 불러오고, 실행하고 저장하는 모든 것이 CPU에서 이루어진다. CPU는 산술/논리적인 연산을 처리하는 **ALU**(Arithmetic Logic Unit)와 CPU를 제어하는 **Control Unit**, CPU에 필요한 데이터를 저장하는 **Register** 등으로 구성된다.

## Memory

주기억장치는 프로그램 실행과정에서 데이터들을 임시로 저장하기 위해서 사용되며, **RAM**(Random Access Memory) 등이 있다. 보조기억장치는 운영체제같은 데이터를 장기적으로 저장하기 위해서 사용하며, **HDD**(Hard Disk Drive), **SSD**(Solid State Drive) 등이 있다.

## Bus

장치 사이에서 신호를 전송하는 통로를 말하며, 대표적으로 데이터가 이동하는 **Data Bus**, 주소를 지정하는 **Address Bus**, 읽기/쓰기를 제어하는 **Control Bus**가 있다. 이 외에도 Ethernet Cable, Protocol 등도 Bus라고 불린다.

## Memory가 있는데 CPU 안에 레지스터가 있는 이유

CPU의 연산속도가 빨라 Memory의 속도가 따라잡지 못하기 때문에 교환 속도를 단축시키기 위해서 Register, Cache를 CPU 내부에 가지고 있다.
