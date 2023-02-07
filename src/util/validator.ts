export const validator = {
  email: (value: string) => {
    const result = VALIDATE_PATTERN.EMAIL.test(value);
    return {
      value: result,
      message: result ? "" : ValidationError.EMAIL_ERROR,
    };
  },
  password: (value: string) => {
    const result = value.length >= 8;
    return {
      value: result,
      message: result ? "" : ValidationError.PASSWORD_ERROR,
    };
  },
};

const VALIDATE_PATTERN = {
  EMAIL: /@/,
};

export const ValidationError = {
  EMAIL_ERROR: "@를 포함하여 입력해주세요.",
  PASSWORD_ERROR: "8자리 이상 입력해주세요.",
  PASSWORD_CHECK_ERROR: "패스워드와 동일하게 입력해주세요.",
};
