import cancelIcon from "../../../../assets/icon/icon-cancel.svg";
import { S } from "./style";

export default function CancelBtn({ onClick }: { onClick?: () => void }) {
  return (
    <S.Button onClick={onClick} type="button" data-testid="cancel-button">
      <img src={cancelIcon} alt="승인 버튼" />
    </S.Button>
  );
}
