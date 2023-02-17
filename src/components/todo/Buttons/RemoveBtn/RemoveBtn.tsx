import { useCallback, useContext } from "react";
import removeIcon from "../../../../assets/icon/icon-remove.svg";
import { ToDoContext } from "../../../../pages/Todo/Todo";
import todoApi from "../../../../services/api/todo";
import { S } from "./style";

export default function RemoveBtn({ id }: { id: number }) {
  const { getTodos } = useContext(ToDoContext);

  const handleDelete = useCallback(
    async (todoId: number) => {
      if (!window.confirm("정말 삭제하시겠습니까?")) return;

      await todoApi.deleteTodo(todoId);
      getTodos();
    },
    [getTodos]
  );

  return (
    <S.Button onClick={() => handleDelete(id)} data-testid="delete-button" type="button">
      <img src={removeIcon} alt="삭제 버튼" />
    </S.Button>
  );
}
