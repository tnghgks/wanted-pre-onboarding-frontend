import { S } from "./style";

interface Props {
  id: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error: string;
  required: boolean;
  type: string;
  value: string;
  autoFocus: boolean;
}

export default function Input({ id, label, error, ...rest }: Partial<Props>) {
  return (
    <>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Input id={id} {...rest} />
      <S.InputErrorMessage>{error}</S.InputErrorMessage>
    </>
  );
}
