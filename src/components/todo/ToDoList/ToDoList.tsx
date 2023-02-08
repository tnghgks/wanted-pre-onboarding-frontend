import ModifyBtn from "../ModifyBtn/ModifyBtn";
import RemoveBtn from "../RemoveBtn/RemoveBtn";
import { S } from "./style";

export default function ToDoList() {
  return (
    <S.Container>
      <S.TodoItem>
        <label>
          <input type="checkbox" />
          <S.TodoText>오늘 할일 1</S.TodoText>
        </label>
        <S.ButtonContainer>
          <ModifyBtn />
          <RemoveBtn />
        </S.ButtonContainer>
      </S.TodoItem>
    </S.Container>
  );
}
