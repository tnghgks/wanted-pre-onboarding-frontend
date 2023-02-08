import { S } from "./style";
import iconEnter from "../../../assets/icon/icon-enter.svg";

export default function TodoInput() {
  return (
    <S.Container>
      <S.Button data-testid="new-todo-add-button">
        <img src={iconEnter} alt="입력 버튼" />
      </S.Button>
      <S.Input type="text" data-testid="new-todo-input" />
    </S.Container>
  );
}
