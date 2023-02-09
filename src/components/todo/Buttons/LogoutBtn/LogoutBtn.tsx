import { useCallback } from "react";
import logoutIcon from "../../../../assets/icon/icon-logout.svg";
import { S } from "./style";

export default function LogoutBtn() {
  const handleLogout = useCallback(() => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }, []);

  return (
    <S.Button onClick={handleLogout} type="button">
      <img src={logoutIcon} alt="로그아웃 버튼" />
    </S.Button>
  );
}
