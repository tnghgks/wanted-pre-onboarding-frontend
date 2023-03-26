import confirmIcon from "../../../../assets/icon/icon-confirm.svg";
import { S } from "./style";

export default function ConfirmBtn() {
  return (
    <S.Button type="submit" data-testid="submit-button">
      <img src={confirmIcon} alt="제출 버튼" />
    </S.Button>
  );
}
