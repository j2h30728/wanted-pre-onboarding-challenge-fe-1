# wanted-pre-onboarding-challenge-fe-1

원티드 프리온보딩 챌린지 프론트엔드 코스 사전과제

<p>
  <img src="https://img.shields.io/badge/React-^18.2.0-61DAFB?style=flat&logo=React&logoColor=white"/> 
  <img src="https://img.shields.io/badge/Typescript-blue?style=flat&logo=Typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS-DD3A0A?style=flat&logo=CSS3&logoColor=white"/>
    <img src="https://img.shields.io/badge/Reactquery-ff4154?style=flat&logo=React Query&logoColor=white"/>
    <img src="https://img.shields.io/badge/StyledComponent-DB7093?style=flat&logo=styled-components&logoColor=white"/>
        <img src="https://img.shields.io/badge/React Hook Form-EC5990?style=flat&logo=ReactHookForm&logoColor=black"/>

</p>

## 구현 기능

### 로그인 창

1. 로그인 완료시, local storage에 token 저장.
2. token의 유무로 접근 경로 한정시킴 :

- 있을 경우(로그아웃, todos 접근 가능)
- 없을 경우(로그인, 회원가입 접근 가능) <br />
  <a href="https://ibb.co/nb7bZz6"><img width="400px" src="https://i.ibb.co/qdNdXk7/2023-01-05-10-37-23.png" alt="2023-01-05-10-37-23" border="0"></a>

### 회원가입 창

1. 회원 가입시, local storage에 token 저장.
2. react-hook-form 을 이용하여 유효성확인 적용

- 이메일 조건 : 최소 `@`, `.` 포함
- 비밀번호 조건 : 8자 이상 입력
- 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 함 <br/>

<img width="400px" src="https://i.ibb.co/RYPHtrH/2023-01-05-10-37-47.png" alt="2023-01-05-10-37-47" border="0">
<img width="400px" src="https://i.ibb.co/vJsW5N9/2023-01-08-8-06-51.png" alt="2023-01-08-8-06-51" border="0">

### 목록과 함께 상세 영역 확인 가능

1. todos 페이지에서 목록과 함께 상세 내용도 확인가능
2. todos 목록에서 내용확인 및 삭제가능
3. todo 내용 추가 가능 <br />
   <img width="400px"  src="https://i.ibb.co/fH6Y66y/2023-01-08-8-06-37.png" alt="2023-01-08-8-06-37" border="0">

- 22.01.08 줄바꿈 적용

### 상세 영역에서 삭제 및 수정, 제출 취소 가능

1. 원하는 todo를 클릭하여, 상세내용을 확인하고 수정 및 삭제를 진행할 수 있음<br/>
   <img width="400px" src="https://i.ibb.co/zsPGWZ8/2023-01-05-10-38-27.png" alt="2023-01-05-10-38-27" border="0">

## 개선 점

1. 상태관리의 필요성
2. alert창을 모달창으로 대체 필요
3. 깔끔하지 못한 컴포넌트화. 관심사 분리 필요!
4. 구현 과제 내용 중, 이해하지 못한 내용이 존재 함

# 1-2) 클라이언트 구현 과제 안내

## Assignment 1 - Login / SignUp

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다
  - 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다
  - [x] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
- 이메일과 비밀번호의 유효성을 확인합니다
  - [x] 이메일 조건 : 최소 `@`, `.` 포함
  - [x] 비밀번호 조건 : 8자 이상 입력
  - [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  - [x] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
  - [x] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - [ ] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

## Assignment 2 - Todo List

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요
  - [x] 목록 / 상세 영역으로 나누어 구현해주세요
  - [x] Todo 목록을 볼 수 있습니다.
  - [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  - [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
  - [x] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
  - [ ] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요

  - [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

## 실행 방법

[서버 실행](https://github.com/syoungee/wanted-pre-onboarding-challenge-fe-1-api) : 3000번 포트 사용<br/>
클라이언트 실행 : 5174포드 사용. 아래의 명령어로 실행.<br/>

```
npm install
npm run dev
```
