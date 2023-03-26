import { S } from "./style";

export default function ErrorMessage({ children, className }: { children?: string; className?: string }) {
  return <S.Container className={className}>{children}</S.Container>;
}
