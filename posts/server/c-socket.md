---
title: C++ 소켓 프로그래밍 해보기
pubDate: 2024-07-14

tags: [cpp, socket, network]
category: 서버
---

# 소켓이란?

서로 다른 프로세스 간에 데이터를 주고받을 수 있는 인터페이스의 역할을 한다.

서버는 소켓을 생성하고 바인딩하고 클라이언트의 요청을 기다리다가 요청이 오면 요청을 허용하고 데이터를 송수신한 이후에 연결을 종료한다.

![socket](./images/socket.png)

## 코드 설명

```cpp
// 소켓을 생성하기 위해서 사용하며, 반환값이 -1 이면 소켓 생성 실패, 0 이상의 값이라면 소켓 디스크럽터를 반환한다.

// domain: 프로토콜 패밀리를 지정하기 위해서 사용한다. AF_INET (IPv4), AF_INET6 (IPv6) etc...
// type: 프로토콜을 지정하기 위해서 사용한다. SOCK_STREAM (TCP), SOCK_DGRAM (UDP), SOCK_RAW (RAW Data)
// protocol: 0 아니면 IPPROTO_TCP, IPPROTO_UDP

int socket(int domain, int type, int protocol);
```

```cpp
// 연결 요청을 위해서 사용한다.

// sockfd: socket()을 통해 할당받은 디스크럽터 번호
// serv_addr: 연결할 서버의 정보의 포인터
// adddrlen: serv_addr의 크기

int connect(int sockfd, const struct sockaddr* serv_addr, socklen_t addrlen);
```

```cpp
// 데이터를 수신하기 위해서 사용한다.

// sockfd: sockfd: socket()을 통해 할당받은 디스크럽터 번호
// buf: 수신한 데이터를 담을 데이터버퍼의 포인터 (char[])
// len: 데이터퍼버의 크기
// flags: 보통 0을 쓴다.

ssize_t recv(int sockfd, void* buf, int len, int flags);
```

```cpp
// 소켓에 주소를 할당하기 위해 사용한다.

// sockfd: socket()을 통해 할당받은 디스크럽터 번호
// addr: 연결할 서버의 정보의 포인터
// adddrlen: addr의 크기

int bind(int sockfd, struct sockaddr* addr, socklen_t addrlen);
```

```cpp
// 클라이언트에서 요청을 보낼 때까지 대기한다.

// sockfd: socket()을 통해 할당받은 디스크럽터 번호
// backlog: 연결 요청을 대기할 큐의 크기

int listen(int sock, int backlog);
```

```cpp
// 클라이언트의 연결 요청을 허용할 때 사용한다. 반환값이 -1 이면 소켓 생성 실패, 0 이라면 연결이 끊겼다는 것이다.

// sock: socket()을 통해 할당받은 디스크럽터 번호
// addr: 클라이언트의 주소 정보
// addrlen: addr의 크기

int accept(int sock, struct sockaddr* addr, socklen_t* addrlen);
```

```cpp
// 데이터를 송신하기 위해서 사용하며, 실제 보내진 데이터의 byte 크기가 반환되며 한번에 모든 패킷이 전송되지는 않는다.

// sockfd: socket()을 통해 할당받은 디스크럽터 번호
// buf: 보낼 데이터의 포인터
// len: buf의 크기
// flags: 보통 0을 쓴다.

ssize_t send(int sockfd, const void* buf, int len, int flags);
```

## Client Code

```cpp
#include <iostream>
#include <sys/socket.h>
#include <netinet/in.h>
#include <unistd.h>

using namespace std;

int main() {
    // 소켓을 생성한다.
    int network_socket = socket(AF_INET, SOCK_STREAM, 0);

    // 연결할 서버의 정보
    sockaddr_in server_address = {};
    server_address.sin_family = AF_INET;
    server_address.sin_port = htons(1234);
    server_address.sin_addr.s_addr = INADDR_ANY;

    // 소켓 연결을 요청한다.
    int connection_status = connect(network_socket, (sockaddr *) &server_address, sizeof(server_address));

    if(connection_status == -1) {
        perror("Errrrrrror");
    }

    // 데이터를 수신받는다.
    char server_response[256];
    recv(network_socket, &server_response, sizeof(server_response), 0);

    printf("%s", server_response);

    // 소켓을 닫는다.
    close(network_socket);

    return 0;
}
```

## Server Code

```cpp
#include <iostream>
#include <sys/socket.h>
#include <netinet/in.h>
#include <unistd.h>

using namespace std;

int main() {
    char server_message[256] = "Hello World!";

    // 소켓을 생성한다.
    int server_socket = socket(AF_INET, SOCK_STREAM, 0);

    // 연결할 서버의 정보
    sockaddr_in server_address = {};
    server_address.sin_family = AF_INET;
    server_address.sin_port = htons(1234);
    server_address.sin_addr.s_addr = INADDR_ANY;

    // 소켓에 연결할 서버의 주소를 할당한다.
    bind(server_socket, (sockaddr*) &server_address, sizeof(server_address));

    // 클라이언트에서 요청을 보낼 때까지 대기한다.
    listen(server_socket, 5);

    // 클라이언트의 연결 요청을 수락한다.
    int client_socket = accept(server_socket, NULL, NULL);

    // Hello World를 송신한다.
    send(client_socket, server_message, sizeof(server_message), 0);

    // 소켓을 닫는다.
    close(server_socket);

    return 0;
}
```
