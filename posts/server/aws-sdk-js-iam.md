---
title: AWS SDK for Javascript 사용해보기 + IAM
pubDate: 2024-06-15

tags: [javascript]
category: 서버
---

# TL;DR

AWS SDK for javascript를 쓰기 위해서 다음과 같은 코드를 만들고 실행하였다.

```typescript
const command = new PutCommand({
  TableName: 'post',
  Item: {
    id: randomUUID(),
    title: title,
    content: content,
    date: date,
  },
});
const response = await docClient.send(command);
console.log(response);
```

하지만 Credential... Provider... 이런 에러를 뱉었고 문서를 마저 읽어보자 aws sso login을 하라는 문구가 있었다.

## aws sso login

`aws sso login` 입력했지만 sso_start_url, sso_region이 없다면서 `aws configure sso`를 통해 설정해주라는 로그가 떴다.

## aws configure sso

다음과 같은 명령어를 실행하자 SSO Session Name, SSO Start Url 등을 입력해달라고 떴고 뭘 입력해야될지 몰랐던 나는 구글에 검색해봤고 다음과 같은 답을 얻었다.

"AWS SSO를 활성화하자. 물론 지금은 AWS IAM Identity Center라는 이름이다."

## AWS IAM Identity Center

1. AWS IAM Identity Center - Users - Add User로 유저를 만들고 이메일 인증을 하고 비밀번호를 정한다.

2. AWS IAM Identity Center - Multi-account Permissions - AWS Accounts에서 자신의 AWS 계정을 선택하고 Assign users or groups에서 Users를 선택하고 1번에서 만들었던 계정을 선택하고 Permission을 지정한 다음 Submit을 하면 된다.

3. 그럼 다시 aws configure sso 명령어를 입력하고 AWS IAM Identity Center - Dashboard에 나오는 정보를 입력한다.

```
SSO start URL = AWS access portal URL
SSO region = ex) ap-northeast-2
```

4. 다음과 같이 입력하면 URL과 인증코드가 뜨는데 URL로 들어가서 인증코드를 입력하고 1번에서 만들었던 계정으로 로그인한다.

5. 다시 터미널로 돌아오면 CLI default region 등을 선택할 수 있는데 꼭 입력하지 않고 넘어가도 된다. 전부 입력하고 나면 `aws s3 ls --profile AdministratorAccess-12459719872`과 같은 문구가 뜬다.

6. aws sso login --profile (ex. AdministratorAccess-12459719872)

## 이외의 설정

```typescript
const client = new DynamoDBClient({
region: "ap-northeast-2",
+ credentials: {
+   accessKeyId: "SDF876SFD7SDF",
+   secretAccessKey: "SDFJSDG8SF97SDF98779SDF"
+ }
});
```
