import React, { useRef, useState } from "react";

type Return = [{ value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }, boolean];

export default function useInput(initValue: string, validator?: (value: string) => boolean): Return {
  const [value, setValue] = useState(initValue);
  const result = useRef(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (typeof validator === "function") {
      result.current = validator(value);
    }

    setValue(value);
  };

  return [{ value, onChange }, result.current];
}
