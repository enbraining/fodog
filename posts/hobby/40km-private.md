---
title: 집 - 학교 40KM를 케이블로 연결해서 통신해보는 상상
pubDate: 2024-07-14

tags: [lan]
category: 취미
---

# 어쩌다가

이번 KT 해킹사건 이후로 통신사 없이 자체적으로 통신망을 구축해보면 어떨까? 생각해보다가 밤에 쓰게된 글이다. 이 글에서 최종 목적으로 하는 것은 A군에 있는 공유기에 연결된 PC와 B광역시에 있는 공유기에 연결된 PC의 통신이다.

> PC - 공유기 - 랜선 - 광컨버터 - 광케이블 - 광컨버터 - 랜선 - 공유기 - PC
> 대충 13,000,000 (천삼백만원) 정도 나올 것 같다.

## 케이블 정하기

CAT6 케이블을 기준으로 최대 길이는 100M 정도로 40KM는 택도 없다. 그러기에 우리는 이더넷 케이블 대신 광케이블로 40KM를 연결해야한다.
광케이블은 네이버 쇼핑과 기타 쇼핑몰 기준으로 1KM에 20 ~ 40만원에 가격이 형성되어있다.

기타 설치비 없이 내가 직접 걸어서 40KM를 설치한다고 했을 때 케이블만 사서 설치해도 30만원 \* 40 = 12,000,000 (천이백만원) 정도의 가격이 나올 것이다.

## 컨버터 정하기

광케이블을 이더넷 케이블로 변환하기 위해서는 광컨버터가 필요하다. 너무 저렴한건 맘에 들지 않으므로 [10만원대의 광컨버터](https://www.fibermart.co.kr/goods/view?no=367)를 기준으로 한다. A군과 B광역시 양쪽에 한개씩 200,000 (이십만원) 정도의 가격이 나올 것이다.

## 랜선과 공유기 정하기

랜선 20M에 20,000 (이만원) 정도라고 하고 iptime 공유기 2대 80,000 (팔만원)을 합쳐서 100,000 (십만원) 정도의 가격이 나올 것이다.
