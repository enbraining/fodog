---
title: 유니티 입력받기
pubDate: 2024-05-13

tags: [unity]
category: 취미
---

# Input

입력을 관리하는 클래스

```cs
using EnityEngine;

public class Test: MonoBehaviour
{
    void Update()
    {
        // 키를 눌렀다가 뗐을 때
        if(Input.anyKeyDown)
            Debug.Log("어떤 키가 눌렸습니다.");

        // 누르고 있는 동안 계속
        if(Input.anyKey)
            Debug.Log("얼마나 누르는게야?");
    }
}
```

# 특정 키

```cs
using EnityEngine;

public class Test: MonoBehaviour
{
    void Update()
    {
        // 누르면 한번
        if(Input.getKeyDown(KeyCode.Return))
            Debug.Log("눌렸다");

        // 누르고 있으면 계속
        if(Input.getKey(KeyCode.LeftArrow))
            Debug.Log("누르고 있다");

        // 누르면 한번
        if(Input.getKeyUp(KeyCode.UpArrow))
            Debug.Log("뗐다");
    }
}
```

# 마우스

```cs
using EnityEngine;

public class Test: MonoBehaviour
{
    void Update()
    {
        // 0: 좌클릭 1: 우클릭
        // 누르고 있으면 계속
        if (Input.GetMouseButton(1))
            Debug.Log("흠");

        // 눌렀을 때 한번
        if (Input.GetMouseButtonDown(1))
            Debug.Log("흠?");

        // 뗐을 때 한번
        if (Input.GetMouseButtonUp(1))
            Debug.Log("흠!");
    }
}
```

# 좌표 받아오기

```cs
public class NewBehaviourScript : MonoBehaviour
{
    void Update()
    {
        // 스페이스 키를 누르고 있는 동안
        if (Input.GetButton("Jump"))
        {
            Debug.Log("Jump " + Input.GetAxis("Jump"));
        }

        // 횡 이동, 이동 키를 누르고 있는 동안
        if (Input.GetButton("Horizontal"))
        {
            Debug.Log("Where " + Input.GetAxis("Horizontal")); // float
            Debug.Log("Where RAW " + Input.GetAxisRaw("Horizontal")); // 왼 -1 오 1
        }

        // 축 이동, 이동 키를 누르고 있는 동안
        if (Input.GetButton("Vertical"))
        {
            Debug.Log("Where " + Input.GetAxis("Vertical")); // float
            Debug.Log("Where RAW " + Input.GetAxisRaw("Vertical")); // 위 1 아래 -1
        }
    }
}
```
