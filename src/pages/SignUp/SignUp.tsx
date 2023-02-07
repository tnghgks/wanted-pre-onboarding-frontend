import Button from "../../components/common/Button/Button";
import { S } from "./style";

export default function SignUp() {
  return (
    <main>
      <h1 className="ir-hidden">회원가입 페이지</h1>
      <S.Container>
        <S.Title>회원가입</S.Title>
        <S.FormContainer>
          <input type="email" placeholder="이메일" />
          <input type="password" placeholder="패스워드" />
          <input type="password" placeholder="패스워드 확인" />
          <Button theme="red">회원가입</Button>
        </S.FormContainer>
      </S.Container>
    </main>
  );
}
