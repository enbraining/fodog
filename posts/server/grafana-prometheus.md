---
title: Grafana, Prometheus 설치하고 CPU 부하 그래프까지 확인하기
pubDate: 2024-07-22

tags: [grafana, prometheus]
category: 서버
---

# TL;DR

대용량 트래픽 경험을 위해서는 나름의 기준을 정해야 했다. 하지만 어느 정도가 되어야 대용량인지는 너무 추상적이기 때문에 CPU 사용량을 기준으로 하기로 했다. 이 글에서는 CPU 사용량 그래프를 보기 까지의 과정을 설명한다.

## Prometheus란?

프로메테우스는 시스템 정보를 모니터링하기 위해서 사용한다. 단순히 말하면 CPU, 메모리 사용량 등의 정보를 가져와 사용할 수 있게 해준다.

## Grafana란?

그라파나는 프로메테우스에서 수집한 데이터를 바탕으로 다양한 시각화를 나타낼 수 있게 해준다.

## Prometheus 설치하기

[프로메테우스 다운로드](https://prometheus.io/download/)

다음의 링크로 들어가서 자신의 OS에 맞게 다운로드해준 다음에 압축을 풀고 바이너리 형태의 파일을 실행해주면 된다. 기본 포트는 9090이다.

```sh
cd prometheus-2.53.1.darwin-amd64
./prometheus
```

## Grafana 설치하기

[그라파나 다운로드](https://grafana.com/grafana/download/10.0.0?pg=oss-graf&plcmt=hero-btn-1&platform=mac)

자신의 OS에 맞게 다운로드해서 압축을 풀고 바이너리 형태의 파일을 실행해주면 된다. 기본 포트는 3000이다.

```sh
cd grafana-10.0.0
./bin/grafana-server
```

## 중간 점검

여기까지 설정했다면 localhost:3000으로 들어갔을 때 로그인 창이 떠야 정상이다. 로그인은 아이디, 비밀번호 모두 admin을 치면 된다.

## Grafana Datasource 등록하기

로그인했으면 좌측 메뉴바를 누르고 Administration에 들어가서 Data Sources - Add new data source - Prometheus를 선택하고 들어가서 Prometheus server URL에 프로메테우스 기본 주소인 http://localhost:9090을 채워주면 된다.

![datasource](./images/grafana-add-datasource.png)

## Grafana Dashboard 등록하기

똑같이 좌측 메뉴바를 누르고 Dashboards - New - New Dashboard를 누르고 상단 메뉴바에 있는 파일을 눌러서 저장을 할 것이다.

## Node Exporter 설치하기

프로메테우스는 매트릭 정보를 받아오기 위해서 대기하고 있으므로 Exporter를 활용해서 프로메테우스에게 정보를 보내줘야한다. Exporter 중에서 Node Exporter는 서버의 CPU 등의 정보를 받아오기 위해서 사용한다. 기본 포트는 9100이다.

[node exporter](https://prometheus.io/download/#node_exporter)

다른 것들과 똑같이 OS에 맞게 다운로드하고 압축을 풀어서 실행해주면 된다.

```sh
cd node_exporter-1.8.2.darwin-amd64
./node_exporter
```

## Prometheus에 Node Exporter 등록하기

하지만 이 상태에서는 프로메테우스에서 Node Exporter가 어디에 존재하는지 모르기 때문에 매트릭 정보를 받아올 수가 없다. 타겟 그룹에 Node Exporter의 주소를 추가해줘야 인식할 수 있다.

```sh
cd prometheus-2.53.1.darwin-amd64
vi prometheus.yml
```

`prometheus.yml`에 들어가면 targets 그룹을 볼 수 있을텐데 여기에 Node Exporter의 주소인 localhost:9100을 추가해주면 된다.

```yml
scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090', 'localhost:9100'] # 추가할 곳
```

## 드디어 CPU 사용률을 확인해보자

마지막으로 프로메테우스와 그라파나를 재시작하고 아까 `Grafana Dashboard 등록하기`에서 만든 대시보드에 들어가서 Add visualization 버튼을 누르고 datasource로 방금 연결한 프로메테우스를 선택해주면 된다.

![query grafana](./images/grafana-query.png)

이제 하단 Query 창에서 Builder를 코드로 바꿔주고 `Enter a PromQL query...`에 `node_cpu_seconds_total`를 입력해보면 Node Exporter를 추가하기 전에는 되지 않았을 자동완성이 잘 되는 것을 확인할 수 있다.

- CPU 사용률 계산식

```
100 - avg(rate(node_cpu_seconds_total{mode="idle"}[1m])) * 100
```

## 여러가지 그래프로 보기

![graph view](./images/grafana-graph-view.png)

우측 상단에 있는 기본값이 Time Series인 셀렉터를 누르면 다양한 형태의 그래프를 볼 수 있다.

![stat graph](./images/grafana-stat.png)
