---
title: 단순 연결 리스트에 대해 알아보자
pubDate: 2024-07-09

tags:
  - linkedList
  - cpp
category: 알고리즘
---

> 현재 계속 업데이트되고 있는 내용입니다.

# 연결 리스트란?

데이터와 포인터를 한 묶음으로한 노드를 한 줄로 연결해서 저장하는 자료구조이다.

## 단순 연결 리스트

다음 노드를 가리키는 포인터와 데이터만을 가지고 있는 단순한 연결 리스트이다. 리스트의 첫번째 노드를 head라고 부르며, 마지막 노드의 포인터는 null을 가리킨다.

![Singly Linked List](./singly-linked-list.png)

직접 구현해볼 함수는 다음과 같다.

- 맨 앞에 삽입하기
- 맨 뒤에 삽입하기
- 특정 노드 앞에 삽입하기
- 전체 노드 출력하기
- 특정 노드 삭제하기

### 맨 앞에 삽입하기

새로운 노드 2를 만들고 기존에 있던 head 노드를 가리키게 한다. 그리고 head가 새로운 노드 2를 가리키게 한다.

![Singly Linked List](/posts/singly-front-insert.png)

### 맨 뒤에 삽입하기

맨 앞의 노드부터 노드의 포인터가 null일 때까지 head를 다음 노드로 바꿔주는 과정을 반복한다. 노드의 포인터가 null이 됐다면 새로운 노드 2를 만들고 마지막 포인터가 해당 노드 2를 가리키게 한다.

![Singly Linked List](/posts/singly-last-insert.png)

### 특정 노드 뒤에 삽입하기

새로운 노드 2가 삽입할 위치 앞에 있는 노드가 가리키는 노드를 가리키게 한다. 그 다음 기존 노드가 새로운 노드를 가리키게 한다.

![Singly Linked List](/posts/singly-insert.png)

### 특정 노드 삭제하기

삭제할 노드 앞에 있는 노드의 포인터를 해당 노드의 포인터의 노드의 포인터가 가리키는 노드에 연결한다.

![Singly Linked List](/posts/singly-delete.png)

### 코드

```c++
#include <iostream>

using namespace std;

struct node {
    int data;
    node *next;
};

void insert_first(int number, node* &head);
void insert_last(int number, node* &head);
void insert_node(int number, node* &front);
void delete_node(int data, node* &front);
void delete_all(const node* head);
void show_all(const node* head);

int main() {
    node* head = nullptr;

    // 뒤에 삽입
    insert_last(1, head);

    // 앞에 삽입
    insert_first(2, head);

    // 특정 노드 뒤에 삽입
    insert_node(3, head->next);

    // 뒤에 삽입
    insert_last(4, head);

    // 앞에 삽입
    insert_first(5, head);

    // 특정 노드 삭제하기
    delete_node(5, head);

    // 전체 출력
    show_all(head);

    // 메모리 정리
    delete_all(head);
}

void insert_first(int number, node* &head) {
    node* insert_node = new node;
    insert_node->data = number;

    if(head != nullptr) {
        insert_node->next = head;
    }

    head = insert_node;
}

void insert_last(int number, node* &head) {
    node* insert_node = new node;
    insert_node->data = number;

    if(head == nullptr) {
        head = insert_node;
        return;
    }

    node* prev_node = head;
    while(prev_node->next != nullptr) {
        prev_node = prev_node->next;
    }

    prev_node->next = insert_node;
}

void insert_node(int number, node* &front) {
    node* insert_node = new node;
    insert_node->data = number;

    if(front == nullptr) {
        front = insert_node;
        return;
    }

    insert_node->next = front->next;
    front->next = insert_node;
}

void delete_node(int data, node* &front) {
    if(front->data == data) {
        front = front->next;
        return;
    }

    node* next_node = front;
    while(next_node->next->data != data) {
        next_node = next_node->next;
    }

    node* current_node = next_node->next;
    next_node->next = next_node->next->next;
    free(current_node);
}

void delete_all(const node* head) {
    while(head->next != nullptr) {
        node* temp = head->next;
        delete head;
        head = temp;
    }
}

void show_all(const node* head) {
    cout << head->data << " ";
    while(head->next != nullptr) {
        head = head->next;
        cout << head->data << " ";
    }
    cout << '\n';
}
```
