---
title: KVM으로 가상 머신을 관리해보자 (업데이트 중)
pubDate: 2024-07-25

tags: [virtual_machine, kvm]
category: 서버
---

## Type 1 하이퍼바이저와 Type 2 하이퍼바이저의 차이

Type 1 하이퍼바이저의 경우에는 하드웨어에서 직접 실행된다는 차이가 있다. 하이퍼바이저를 통해서 하드웨어에 요청해서 리소스를 할당하기 때문에 효율적으로 리스스를 사용할 수 있으며, 더 뛰어난 성능을 제공할 수 있다. (하드웨어 - 하이퍼바이저 - OS)

Type 2 하이퍼바이저는 운영체제 위에서 가상으로 실행되기 때문에 Type 1 하이퍼바이저에 비해서는 오버헤드가 크다는 단점이 있다. 운영체제에 직접 설치해서 이용할 수 있기 때문에 관련 지식이 많지 않더라도 Type 1 하이퍼바이저에 비해서 쉽게 사용할 수 있다. (하드웨어 - 운영체제 - 하이퍼바이저 - OS)

## MacOS에서 KVM 사용하기

다양한 에러를 해쳐나가며 순조롭게 동작하나 싶었지만 MacOS에서는 KVM이 100% 호환되지 않았기 때문에 (하려면 할 수는 있겠지만...) 리눅스 환경에서 다시 시도하겠다고 마음 먹었다.

```sh
brew tap arthurk/homebrew-virt-manager
brew install virt-manager virt-viewer
brew services start libvirt
```

## 그동안 MacOS에서 qemu라도 써보자

리눅스 환경이 준비되기 전까지 Type 2 하이퍼바이저인 qemu를 이용해서 대충 놀아봤다. cdrom 옵션에는 실행할 운영체제의 iso 파일의 위치를, drive 옵션에는 첫번째 명령어로 생성한 가상 디스크 이미지의 위치를 넣어주면 된다. nic 옵션을 이용해서 포트도 설정해줬기 때문에 ssh로 접속하는 것 또한 가능하다.

```sh
sudo qemu-img create -f qcow2 /Users/enbraining/mnt/ubuntu-vm.qcow2 20G

qemu-system-x86_64 \
  -m 2048 \
  -vga virtio \
  -display default,show-cursor=on \
  -usb \
  -device usb-tablet \
  -smp 2 \
  -cdrom ~/Downloads/ubuntu-24.04-live-server-amd64.iso \
  -drive file=/Users/enbraining/mnt/ubuntu-vm.qcow2,if=virtio \
  -net nic,model=virtio -net user \
  -nic user,hostfwd=tcp::6664-:22,model=virtio-net-pci

ssh enbraining@localhost -p 6664
```

## Ubuntu KVM 설치하기

리눅스 환경을 설정하고 업데이트 될 예정...
