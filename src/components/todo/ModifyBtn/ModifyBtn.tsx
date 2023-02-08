import modifyIcon from "../../../assets/icon/icon-pen-fill.svg";
import { S } from "./style";

export default function ModifyBtn({ onClick }: { onClick?: () => void }) {
  return (
    <S.Button onClick={onClick} data-testid="modify-button">
      <img src={modifyIcon} alt="수정 버튼" />
    </S.Button>
  );
}
