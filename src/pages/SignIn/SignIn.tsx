import Button from "../../components/common/Button/Button";
import { S } from "./style";

export default function SignIn() {
  return (
    <main>
      <h1 className="ir-hidden">로그인 페이지</h1>
      <S.Container>
        <S.Title>로그인 폼</S.Title>
        <S.FormContainer>
          <input type="text" placeholder="이메일" />
          <input type="text" placeholder="패스워드" />
          <Button theme="red">로그인</Button>
          <Button>회원가입</Button>
        </S.FormContainer>
      </S.Container>
    </main>
  );
}
