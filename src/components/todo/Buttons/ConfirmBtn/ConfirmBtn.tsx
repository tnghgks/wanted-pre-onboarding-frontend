import confirmIcon from "../../../../assets/icon/icon-confirm.svg";
import { S } from "./style";

export default function ConfirmBtn({ onClick }: { onClick?: () => void }) {
  return (
    <S.Button onClick={onClick} type="submit" data-testid="submit-button">
      <img src={confirmIcon} alt="제출 버튼" />
    </S.Button>
  );
}
