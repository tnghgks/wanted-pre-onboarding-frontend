import { S } from "./style";

interface Props {
  children: string | JSX.Element;
  bgColor?: string;
  txtColor?: string;
  disabled?: boolean;
}

export default function Button({ children, bgColor, txtColor, disabled = false }: Props) {
  return (
    <S.Button bgColor={bgColor} txtColor={txtColor} disabled={disabled}>
      {children}
    </S.Button>
  );
}
