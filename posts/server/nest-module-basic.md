---
title: NestJS 모듈 구조
pubDate: 2024-08-03

tags: [module, nestjs]
category: 서버
---

# TL;DR

Nest.js는 DI를 지원하는프레임워크로 서비스의 의존 관계를 관리하기 쉽고 기본적으로 Controller, Provider, Module로 이루어진 아키텍쳐를 지원한다.

## 용어

- 인스턴스화 == 토큰화
- provider == service

## 모듈 구조

imports, exports, providers, controllers 4가지로 구성된다. 또한 모듈은 각 API마다 하나 이상 존재해야하며 다른 API의 서비스 등을 인스턴스로 직접 생성하는 것이 아니라 Injection을 통해서 받아오는 싱글톤 패턴으로 이루어져있다.

| key         | value                                                    |
| ----------- | -------------------------------------------------------- |
| imports     | 해당 모듈에서 사용할 다른 외부 모듈의 집합               |
| controllers | 해당 모듈에서 사용할 인스턴스화 되야하는 컨트롤러의 집합 |
| providers   | 해당 모듈에서 사용할 인스턴스화 되야하는 Provider의 집합 |
| exports     | 다른 모듈에서 사용할 수 있게할 Provider의 집합           |

## 정적 모듈과 동적 모듈의 차이

보통 정적 모듈에서는 아래의 코드와 같은 방식으로, Board 모듈에서 imports를 통해서 가져온 User Module의 Provider을 생성자 의존성 주입을 통해 사용할 수 있다.

```ts
// user.module.ts
@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}

⬇️

// board.module.ts
@Module({
  imports: [UserModule],
  controllers: [BoardController],
  providers: [BoardService],
})
export class BoardModule {}

⬇️

// board.service.ts
@Controller('board')
export class BoardController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getStatus() {
    return this.userService.getStatus();
  }
}
```

하지만 정적 모듈은 여러 도메인에서 써야하는 모듈이라면 서로 다르게 작동해야하는 로직이 있는 경우 각 모듈마다 다른 값을 지정해줄 수 없다. 이런 경우에 사용할 수 있는 것이 동적 모듈이다. 아래와 같이 동적 모듈은 클래스가 아닌 메소드를 사용해서 등록한다.

User 모듈에서는 Board 모듈에서 register 함수의 options를 받아와서 `USER_OPTIONS`에 넣어준다.

```ts
// Dynamic Module - board.module.ts
@Module({
  imports: [UserModule.register({ name: 'hello ' })],
  controllers: [BoardController],
  providers: [BoardService],
})
export class BoardModule {}

⬇️

// Dynamic Module - user.module.ts
@Module({})
export class UserModule {
  static register(options): DynamicModule {
    return {
      module: UserModule,
      providers: [
        {
          provide: 'USER_OPTIONS',
          useValue: options, // options: { name: string }
        },
        UserService,
      ],
      exports: [UserService],
    };
  }
}

⬇️

// Dynamic Module - user.service.ts
@Injectable()
export class UserService {
  constructor(@Inject('USER_OPTIONS') private readonly userOptions: any) {}

  getStatus() {
    return this.userOptions.name;
  }
}
```

User 모듈에서 받아온 userOptions를 `USER_OPTIONS`로 지정해주고 Provider에서는 Inject 에노테이션을 통해 받아온 값을 사용할 수 있다.

```ts
// Dynamic Module - board.service.ts
@Injectable()
export class BoardService {
  constructor(private readonly userService: UserService) {}

  getStatus() {
    return this.userService.getStatus(); // hello
  }
}
```
