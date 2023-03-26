import { S } from "./style";

interface Props {
  children: string | JSX.Element;
  bgColor?: string;
  txtColor?: string;
  disabled?: boolean;
}

export default function Button({ children, bgColor, txtColor, disabled = false, ...rest }: Props) {
  return (
    <S.Button bgColor={bgColor} txtColor={txtColor} disabled={disabled} {...rest}>
      {children}
    </S.Button>
  );
}
