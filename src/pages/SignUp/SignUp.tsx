import RegisterForm from "../../components/auth/RegisterForm/RegisterForm";
import { S } from "./style";

export default function SignUp() {
  return (
    <main>
      <h1 className="ir-hidden">회원가입 페이지</h1>
      <S.Container>
        <S.Title>회원가입</S.Title>
        <RegisterForm />
      </S.Container>
    </main>
  );
}
