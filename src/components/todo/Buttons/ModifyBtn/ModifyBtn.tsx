import modifyIcon from "../../../../assets/icon/icon-pen-fill.svg";
import { S } from "./style";

export default function ModifyBtn({ onClick }: { onClick?: any }) {
  return (
    <S.Button onClick={onClick} data-testid="modify-button" type="button">
      <img src={modifyIcon} alt="수정 버튼" />
    </S.Button>
  );
}
