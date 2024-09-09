---
title: 유니티 이동하기
pubDate: 2024-05-13

tags: [unity]
category: 취미
---

# 이동하기

```cs
using UnityEngine;

public class Test : MonoBehaviour
{
    void Start()
    {
        Vector3 v3 = new Vector3(5, 5, 5);

        // Vector 값을 현재 위치에 더함
        // 초기에 한번 실행됨
        transform.Translate(v3);
    }

    void Update()
    {
        Vector3 v3 = new Vector3(0.05f, 0.05f, 0.05f);

        // Vector 값을 현재 위치에 더함
        // 프레임 당 한번씩 실행되서 쭉 올라감
        transform.Translate(v3);
    }
}
```

# 입력받아 이동하기

```cs
using UnityEngine;

public class Test : MonoBehaviour
{
    void Update()
    {
        Vector3 v3 = new Vector3(Input.GetAxis("Horizontal"), Input.GetAxis("Vertical"), 0);
        transform.Translate(v3);
    }
}
```
