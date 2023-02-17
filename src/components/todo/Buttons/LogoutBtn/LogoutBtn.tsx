import { useCallback } from "react";
import logoutIcon from "../../../../assets/icon/icon-logout.svg";
import { S } from "./style";

export default function LogoutBtn() {
  const handleLogout = useCallback(() => {
    if (!window.confirm("로그아웃하시겠습니까?")) return;

    localStorage.removeItem("token");
    window.location.href = "/login";
  }, []);

  return (
    <S.Button onClick={handleLogout} type="button">
      <img src={logoutIcon} alt="로그아웃 버튼" />
    </S.Button>
  );
}
