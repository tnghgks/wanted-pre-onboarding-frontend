import removeIcon from "../../../assets/icon/icon-remove.svg";
import { S } from "./style";

export default function RemoveBtn({ onClick }: { onClick?: () => void }) {
  return (
    <S.Button onClick={onClick} data-testid="delete-button">
      <img src={removeIcon} alt="삭제 버튼" />
    </S.Button>
  );
}
