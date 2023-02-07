import LoginForm from "../../components/auth/LoginForm/LoginForm";
import { S } from "./style";

export default function SignIn() {
  return (
    <main>
      <h1 className="ir-hidden">로그인 페이지</h1>
      <S.Container>
        <S.Title>로그인</S.Title>
        <LoginForm />
      </S.Container>
    </main>
  );
}
