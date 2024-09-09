---
title: OSPF란?
pubDate: 2023-08-20

tags: [ospf, network]
category: CS
---

# OSPF

_**AS inside routing**
링크 상태를 고려해 최단 경로를 찾는다._

## Algorithm

> 최단 경로를 선택하기 위해서 Dijkstra's SPF(Shortest Path First) 알고리즘을 사용한다.

## Advantage

- Fast Reconvergence
  > 변화가 생기면 바로 해당 정보를 전파하기 때문에 즉시 라우팅 정보를 반영할 수 있다.
- Partial Update
  > 변화가 생길 때만 라우팅 정보를 전송하므로 리소스의 낭비가 적다.
- Area
  > OSPF 네트워크를 쪼개서 관리하기 때문에 효율적인 라우팅과 관리가 가능하다.
- Stub Area
  > 내부 라우터에게 외부 경로에 대한 정보를 차단하고 기본 라우팅만 전달한다.
  > 라우팅 테이블의 크기가 줄어들어 안정성 확보, 성능 향상, 장애 처리 쉬움
- Support VLSM
  > IP 주소를 효과적으로 사용할 수 있고, 라우팅 테이블의 크기를 줄일 수 있다.
- Others
  > 라우팅 요약 기능을 제공하며 RIP과 다르게 홉 카운트 제한이 없다.
  > 또한 RIP과 다르게 링크 상태도 고려해서 더 효율적인 경로를 얻을 수 있다.

## Kind of router

- IR : 특정 Area에만 속한 라우터
- ABR : 두 개 이상의 Area에 속한, 경계선에 걸쳐져 있는 라우터
- ASBR : 외부 네트워크, 다른 AS와 연결되는 라우터

## Command

### Basic

```
1 Router(config)#router ospf {processId}
2 Router(config-router)# router-id {routerId}
3 Router(config-router)# network {networkAddress} {wildcardMask} area {areaId}
```

1. EIGRP는 processId가 AS 번호이기 때문에 EIGRP 정보를 주고 받을 라우터들은 숫자를 일치시켜야 하지만
   OSPF는 processId가 AS 번호가 아니기 때문에 일치시킬 필요는 없다.
2. routerId는 해당 라우터를 나타내는 고유의 값이다. 주로 논리적 인터페이스인 루프백 인터페이스를 라우터 아이디로 선언한다.
   > **논리적 인터페이스를 사용하는 이유는 꺼지지 않는 한 다운될 일이 없기 때문이다.**
   > 루프백 주소 중 가장 높은 주소가 라우터 아이디로 사용되며 없을 경우, 활성화된 인터페이스의 주소 중 가장 높은 값을 가지는 주소를 라우터 ID로 사용한다.
3. areaId는 영역 지정을 위한 설정이다. 하나의 영역으로 구성하면 단일 영역 OSPF, 아니면 다중 영역 OSPF
