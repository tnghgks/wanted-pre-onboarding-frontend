import { S } from "./style";

interface Props {
  children: string | JSX.Element;
  theme?: string;
}

export default function Button({ children, theme }: Props) {
  return <S.Button theme={theme}>{children}</S.Button>;
}
