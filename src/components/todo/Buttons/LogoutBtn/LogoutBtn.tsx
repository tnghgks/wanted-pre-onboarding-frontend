import logoutIcon from "../../../../assets/icon/icon-logout.svg";
import { S } from "./style";

export default function LogoutBtn({ onClick }: { onClick?: () => void }) {
  return (
    <S.Button onClick={onClick}>
      <img src={logoutIcon} alt="로그아웃 버튼" />
    </S.Button>
  );
}
