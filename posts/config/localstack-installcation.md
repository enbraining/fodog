---
title: Localstack 설치 및 사용해보기
pubDate: 2024-07-23

tags: [localstack, aws]
category: 서버
---

# TL;DR

**한마디로 로컬 환경에 설치할 수 있는 AWS 같은 것이다.** 기존에는 로컬에서 백엔드 서버를 테스트할때 S3와 같은 AWS 서비스가 포함되어 있다면 AWS에 버킷을 유지시키고 있어야하는 불편함이 있었다. 하지만 Localstack을 사용한다면 AWS 서비스들을 로컬에서 테스트해볼 수 있게된다.

## 설치하기

homebrew를 이용해서 설치할 수도 있지만 Docker Compose 등의 다른 방법으로도 사용할 수 있다.

[Localstack 설치하기](https://docs.localstack.cloud/getting-started/installation/)

```sh
brew install localstack/tap/localstack-cli
localstack --version
```

## Auth Token 발급받기

Localstack 사이트에서 로그인 후 대시보드에 들어가서 Workspace - Auth Token에 들어가면 확인할 수 있다.

Auth Token을 확인했다면 다음의 과정을 터미널에서 진행하면 된다.

```sh
localstack auth set-token <YOUR_AUTH_TOKEN>
localstack start
```

![start](./localstack.png)

## S3 버킷 만들기

로컬에서 AWS 서비스를 생성하거나 조회하는 등의 작업을 하기 위해서는 awscli-local을 설치해줘야 한다.

```sh
pip install awscli-local
```

잘 설치가 되었다면 이제 S3 버킷을 만들어볼 수 있다. 첫번째 명령어로 버킷을 생성하고 두번째 명령어로 버킷 리스트를 조회해보면 성공적으로 버킷이 생성된 것을 확인할 수 있다.

```sh
awslocal s3api create-bucket --bucket fodo-bucket
awslocal s3api list-buckets
```
