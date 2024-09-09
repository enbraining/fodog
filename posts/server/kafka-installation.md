---
title: Kafka 설치하기
pubDate: 2024-02-11

tags: [kafka]
category: 서버
---

# 다운로드

[Apache Kafka Download](https://www.apache.org/dyn/closer.cgi?path=/kafka/3.7.0/kafka_2.13-3.7.0.tgz)

# 압축 해제

```shell
$ tar -xzf kafka_2.13-3.7.0.tgz
$ cd kafka_2.13-3.7.0
```

# Kafka with KRaft

## 다운로드한 파일을 사용할 때

```shell
# Generate Cluster UUID
$ KAFKA_CLUSTER_ID="$(bin/kafka-storage.sh random-uuid)"

# Format Log Directories
$ bin/kafka-storage.sh format -t $KAFKA_CLUSTER_ID -c config/kraft/server.properties

# Start Kafka Server
$ bin/kafka-server-start.sh config/kraft/server.properties
```

## Docker를 사용할 때

```shell
$ docker pull apache/kafka:3.7.0
$ docker run -p 9092:9092 apache/kafka:3.7.0
```
