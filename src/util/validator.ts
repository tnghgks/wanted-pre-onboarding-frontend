export const validator = {
  email: (value: string) => {
    return VALIDATE_PATTERN.EMAIL.test(value);
  },
  password: (value: string) => {
    return value.length >= 8;
  },
};

const VALIDATE_PATTERN = {
  EMAIL: /@/,
};
