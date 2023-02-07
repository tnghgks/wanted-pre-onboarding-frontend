import { useMemo, useCallback, useState } from "react";
import useInput from "../../../hook/common/useInput";
import { validator, ValidationError } from "../../../util/validator";
import Button from "../../common/Button/Button";
import ErrorMessage from "../../common/ErrorMessage/ErrorMessage";
import Input from "../../common/Input/Input";
import { S } from "./style";

export default function RegisterForm() {
  const [email, isValidEmail] = useInput("", validator.email);
  const [password, isValidPw] = useInput("", validator.password);
  const [passwordCheck, isValidPwCheck] = useInput("", validator.password);
  const [error, setError] = useState("");
  const isDisabled = useMemo(() => ![isValidEmail, isValidPw, isValidPwCheck].every((valid) => valid), [isValidEmail, isValidPw, isValidPwCheck]);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (password.value !== passwordCheck.value) {
        return setError(ValidationError.PASSWORD_CHECK_ERROR);
      }
      setError("");
    },
    [password.value, passwordCheck.value]
  );

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
      <Input
        label="패스워드 확인"
        id="passwordCheck"
        type="password"
        placeholder="패스워드와 동일하게 작성해주세요."
        required
        {...passwordCheck}
        error={isValidPwCheck.message}
      />
      <ErrorMessage>{error}</ErrorMessage>
      <Button bgColor="--accent-color" txtColor="white" data-testid="signup-button" disabled={isDisabled}>
        회원가입
      </Button>
    </S.FormContainer>
  );
}
