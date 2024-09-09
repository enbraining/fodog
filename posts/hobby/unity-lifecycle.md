---
title: 유니티 객체 라이프사이클
pubDate: 2024-05-12

tags: [unity]
category: 취미
---

Awake - Start - OnEnable - FixedUpdate - Update - LateUpdate - OnDisable - OnDestroy

# Awake

최초로 오브젝트가 생성될 때 최초로 실행되는 함수

```cs
using UnityEngine;

public class Test: MonoBehaviour
{
    private void Awake(){
        Debug.Log("로딩되었습니다.");
    }
}
```

# Start

오브젝트가 업데이트가 될 준비가 되었을 때 실행되는 함수

```cs
using UnityEngine;

public class Test: MonoBehaviour
{
    private void Start(){
        Debug.Log("업데이트될 준비가 끝났습니다.");
    }
}
```

# OnEnable

오브젝트가 활성화되었을 때 실행되는 함수

```cs
using UnityEngine;

public class Test: MonoBehaviour
{
    private void OnEnable(){
        Debug.Log("나 준비됨");
    }
}
```

# FixedUpdate

물리 함수가 실행되기 전에 실행될 함수 (CPU와 상관없이 주기적으로 실행되는 함수)

```cs
using UnityEngine;

public class Test: MonoBehaviour
{
    private void FixedUpdate(){
        Debug.Log("업데이트 됨");
    }
}
```

# Update

로직이 실행되기 전에 주기적으로 실행되는 함수

```cs
using UnityEngine;

public class Test: MonoBehaviour
{
    private void Update(){
        Debug.Log("업데이트 됨");
    }
}
```

# LateUpdate

모든 업데이트가 끝나고 마지막으로 실행되는 함수

```cs
using UnityEngine;

public class Test: MonoBehaviour
{
    private void LateUpdate(){
        Debug.Log("모든 업데이트가 끝남");
    }
}
```

# OnDisable

오브젝트가 비활성화되었을 때 실행되는 함수

```cs
using UnityEngine;

public class Test: MonoBehaviour
{
    private void OnEnable(){
        Debug.Log("나 잘거임");
    }
}
```

# OnDestroy

오브젝트가 삭제될 때 실행되는 함수

```cs
using UnityEngine;

public class Test: MonoBehaviour
{
    private void OnDestroy(){
        Debug.Log("삭제될거임");
    }
}
```
