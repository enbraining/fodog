---
title: 스프링 Google OAuth2에서 OAuth2User로 타입 캐스팅할 수 없는 문제
pubDate: 2024-07-19

tags: [spring, oauth2]
category: 서버
---

# 문제 이유

Google OAuth2 스코프에 openid를 추가하게 되면 받아오는 클래스의 타입이 DefaultOidcUser로 달라지면서 OAuth2User로 캐스팅할 수 없는 문제가 발생한다.

```java
DefaultOidcUser defaultOidcUser = (DefaultOidcUser) authentication.getPrincipal();
        log.info(defaultOidcUser.getEmail());

UserDto userDto = UserDto.builder()
    .name(defaultOidcUser.getName())
    .username(defaultOidcUser.getNickName())
    .role(Role.ROLE_USER.getName())
    .build();

CustomOAuth2User customUserDetails = new CustomOAuth2User(userDto);
String username = customUserDetails.getUsername();
```

properties.yml의 `spring.security.oauth2.registration.google.scope`에서 openid를 제거하게 되면 OAuth2User로 정상적으로 캐스팅할 수 있다.

```java
CustomOAuth2User customUserDetails = (CustomOAuth2User) authentication.getPrincipal();
String username = customUserDetails.getUsername();
```
