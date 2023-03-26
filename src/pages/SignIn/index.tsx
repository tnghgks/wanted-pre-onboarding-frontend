import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/auth/LoginForm";
import { S } from "./style";

export default function SignIn() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/todo");
    }
  }, [navigate]);

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
