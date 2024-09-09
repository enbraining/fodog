---
title: AWS EC2 Memory Swapping
pubDate: 2024-06-21

tags: [aws, linux, ec2]
category: 서버
---

# 스왑 파일 생성

bs는 블록 크기이고 count는 블록 수이다.

블록 크기는 인스턴스의 사용 가능한 메모리보다 작아야 한다. 그렇지 않으면 "memory exhausted" 오류가 발생한다.

```sh
# 루트 파일 시스템에 스왑 파일을 생성한다. 2GB(128M * 16)
sudo dd if=/dev/zero of=/swapfile bs=128M count=16
```

# 권한 부여

스왑 파일에 대한 권한 부여

```sh
sudo chmod 600 /swapfile
```

# 스왑 영역 설정 

```Sh
sudo mkswap /swapfile
```

# 스왑 파일 추가하기

스왑 공간에 스왑 파일을 추가하여 즉시 사용할 수 있도록 만든다

```sh
sudo swapon /swapfile
```

# 성공했는지 확인 

```sh
sudo swapon -s
```

# 부팅 시 스왑 파일 활성화

```sh
sudo vim /etc/fstab
```

`/swapfile swap swap defaults 0 0`

파일의 마지막 줄에 위의 스크립트를 추가하고 파일을 저장하고 종료한다.

# 확인하기

free를 이용해서 메모리를 확인한다.
