---
title: 앤서블이란?
pubDate: 2024-03-05

tags: [oci, container]
category: 서버
---

# TL;DR

- ssh를 통해 관리되어서 비교적 빠름
- 환경 구성과 배포를 도와줌
- 이미 설정된 구성이 있다면 변경되지 않음 (멱등성)
- 여러 서버에 한번에 적용 가능

## 설치

```
pip install ansible
```

@## 개념

1. Inventory

- Ansible에서 관리할 호스트 리스트임
- 정적 인벤토리: 인벤토리를 직접 지정함

2. Playbook

- 호스트에서 실행할 작업을 적어둔거임

## Inventory

YAML 또는 INI 형식의 파일을 사용할 수 있음

```yml
# hosts.yaml

all:
  hosts: hello.enbraining.com
    255.255.255.255
  children:
    ai:
      hosts: gemini.enbraining.com
        gpt.enbraining.com
    db:
      hosts: input.enbraining.com
        output.enbraining.com
```

### Playbook

```yml
# ---로 시작해야함
- name: install git
  hosts: all
  become: yes

  tasks:
    - name: git installation
      apt:
        name: git
        state: present
        update_cache: true
    - name: print git version
      shell: 'git -v'
```
