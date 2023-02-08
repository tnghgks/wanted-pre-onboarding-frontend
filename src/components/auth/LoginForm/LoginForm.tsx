import { useCallback, useMemo } from "react";
import useInput from "../../../hooks/common/useInput";
import Button from "../../common/Button/Button";
import { validator } from "../../../util/validator";
import { S } from "./style";
import Input from "../../common/Input/Input";

export default function LoginForm() {
  const [email, isValidEmail] = useInput("", validator.email);
  const [password, isValidPw] = useInput("", validator.password);
  const isDisabled = useMemo(() => ![isValidEmail.value, isValidPw.value].every((valid) => valid), [isValidEmail.value, isValidPw.value]);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <Input
        label="이메일"
        id="email"
        type="text"
        placeholder="사용하실 이메일을 입력해주세요."
        data-testid="email-input"
        required
        {...email}
        error={isValidEmail.message}
      />
      <Input
        label="패스워드"
        id="password"
        type="password"
        placeholder="8자리 이상 패스워드를 입력해주세요."
        data-testid="password-input"
        required
        {...password}
        error={isValidPw.message}
      />
      <Button bgColor="--accent-color" txtColor="white" data-testid="signin-button" disabled={isDisabled}>
        로그인
      </Button>
      <S.RegisterLink to="/signup">회원가입 하러가기 ➡</S.RegisterLink>
    </S.FormContainer>
  );
}
