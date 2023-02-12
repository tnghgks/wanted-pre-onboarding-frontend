# 🎩프로젝트 소개

**배포 링크 : https://lake-todo-list.netlify.app/signin**  
**테스트 계정 : share123@naver.com**  
**비밀번호 : share123**

<div align="center">
<img src="https://user-images.githubusercontent.com/17325845/217778619-b820d0e5-5e00-492a-b30d-a8ef96f12dd8.png" width="500" height="500">
</div>

## 소개

로그인 및 회원가입을 통해 이용할 수 있으며 유저 각각의 투두 리스트를 만들 수 있고 수정 및 삭제가 가능한 어플리케이션 입니다.

# 🎬 기능 시연

<div>

|                                                          1. 회원가입                                                          |                                                           2. 로그인                                                           |                                                          3. 로그아웃                                                          |
| :---------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/17325845/217783883-99cd6eb6-d247-4fda-9047-400861c7bb49.gif" width=245 /> | <img src="https://user-images.githubusercontent.com/17325845/217783949-d7bb23e4-b56e-40be-a4c4-df88d4d7b907.gif" width=245 /> | <img src="https://user-images.githubusercontent.com/17325845/217783983-71ed5cdc-281a-4b3e-9c9c-320d31f8da4f.gif" width=245 /> |

<br>

|                                                         3. 투두 생성                                                          |                                                         4. 투두 수정                                                          |                                                         4. 투두 삭제                                                          |
| :---------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/17325845/217783994-2b70163e-48f4-4b5e-9df7-eb03226a630a.gif" width=245 /> | <img src="https://user-images.githubusercontent.com/17325845/217784006-b4b30602-1e0f-4d60-bc84-e5079292522c.gif" width=245 /> | <img src="https://user-images.githubusercontent.com/17325845/217784017-026f1cdc-7fa7-421b-bf20-ab524d78aca3.gif" width=245 /> |

</div>

# 💎 기술스택

- react
- typescript
- styled-component
- react-toastify
- axios

# 🗂 폴더구조

```
📦src
 ┣ 📂assets
 ┃ ┗ 📂icon
 ┣ 📂components
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📂LoginForm
 ┃ ┃ ┗ 📂RegisterForm
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📂Button
 ┃ ┃ ┣ 📂ErrorMessage
 ┃ ┃ ┗ 📂Input
 ┃ ┣ 📂HOC
 ┃ ┃ ┗ 📂auth
 ┃ ┣ 📂style
 ┃ ┗ 📂todo
 ┃ ┃ ┣ 📂Buttons
 ┃ ┃ ┃ ┣ 📂CancelBtn
 ┃ ┃ ┃ ┣ 📂ConfirmBtn
 ┃ ┃ ┃ ┣ 📂LogoutBtn
 ┃ ┃ ┃ ┣ 📂ModifyBtn
 ┃ ┃ ┃ ┗ 📂RemoveBtn
 ┃ ┃ ┣ 📂TodoInput
 ┃ ┃ ┣ 📂TodoItem
 ┃ ┃ ┗ 📂ToDoList
 ┣ 📂constant
 ┣ 📂hooks
 ┃ ┣ 📂common
 ┃ ┗ 📂todo
 ┣ 📂pages
 ┃ ┣ 📂SignIn
 ┃ ┣ 📂SignUp
 ┃ ┗ 📂Todo
 ┣ 📂router
 ┣ 📂services
 ┃ ┗ 📂api
 ┣ 📂types
 ┣ 📂util
```
