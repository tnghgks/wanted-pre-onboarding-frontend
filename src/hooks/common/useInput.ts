import React, { useRef, useState } from "react";

type Return = [
  {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setValue: React.Dispatch<React.SetStateAction<string>>;
  },
  ValidatorReturn
];

type ValidatorReturn = {
  value: boolean;
  message?: string;
};

export default function useInput(
  initValue: string,
  validator?: (value: string) => ValidatorReturn
): Return {
  const [value, setValue] = useState(initValue);
  const result = useRef<ValidatorReturn>({ value: false });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (typeof validator === "function") {
      result.current = validator(value);
    }

    setValue(value);
  };

  return [{ value, onChange, setValue }, result.current];
}
