---
title: 모듈로 연산이란?
pubDate: 2024-06-21

tags: [math]
category: 알고리즘
---

모듈로 연산은 나머지를 수학적으로 나타내기 위해서 사용한다.

ex. 7를 4로 나누면 1이고 나머지가 3인데, 다음을 모듈로 연산으로 나타내면 다음과 같다.

$7\;mod\;4=3$

- 교환 법칙

  $$
  (a+b)\;mod\;n = (b+a)\;mod\;n\\
  (a\times b)\;mod\;n = (b\times a)\;mod\;n
  $$

- 결합 법칙

  $$
  ((a + b) + c)\;mod\;n = (a + (b + c))\;mod\;n \\
  ((a\times b)\times c)\;mod\;n = (a\times (b\times c))\;mod\;n
  $$

- 분배 법칙
  $$
  (a \times (b + c))\;mod\;n = ((a\times b) + (a\times c))\;mod\;n
  $$
