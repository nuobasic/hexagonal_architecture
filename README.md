# Hexagonal_Architecture

## 기술 스택

- Framework: `NestJS`
- Database: `RDS - mysql`
- ORM: `TypeORM`

# 요구사항 분석

## 1. 유저 서비스

- 회원 가입을 합니다. 회원 가입 시 권한을 구분합니다.
- 유저 전체를 조회합니다.
- 단일 유저를 조회합니다.
- 유저를 삭제 할 수 있습니다.
- 내용을 변경 할 수 있습니다.

## API

- 회원 가입

| Method | URL       | Request Body                                              | Response         |
| ------ | --------- | --------------------------------------------------------- | ---------------- |
| POST   | /api/user | email : emai<br>password : 암호화 패스워드<br>role : 권한 | statusCode : 201 |

- 유저 전체 조회

| Method | URL         | Request Path | Response         |
| ------ | ----------- | ------------ | ---------------- |
| GET    | /api/users/ |              | statusCode : 200 |

- 유저 개별 조회

| Method | URL               | Request Path     | Response         |
| ------ | ----------------- | ---------------- | ---------------- |
| GET    | /api/user/:userId | userId : 유저 id | statusCode : 200 |

- 유저 삭제

| Method | URL               | Request Path     | Response         |
| ------ | ----------------- | ---------------- | ---------------- |
| DELETE | /api/user/:userId | userId : 유저 id | statusCode : 200 |

- 유저 수정

| Method | URL               | Request Path     | Response         |
| ------ | ----------------- | ---------------- | ---------------- |
| PUT    | /api/user/:userId | userId : 유저 id | statusCode : 200 |

# 테스트

## Unit Test

#### User Service

- 유저 생성
- 유저 전체 조회
- 유저 단건 조회
- 유저 삭제
- 유저 정보 수정

## 테스트 결과

#### User Service
