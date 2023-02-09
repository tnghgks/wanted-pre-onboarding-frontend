import { useCallback } from "react";
import removeIcon from "../../../../assets/icon/icon-remove.svg";
import todoApi from "../../../../services/api/todo";
import { S } from "./style";

interface Props {
  id: number;
  getTodos: () => Promise<void>;
}

export default function RemoveBtn({ id, getTodos }: Props) {
  const handleDelete = useCallback(
    async (todoId: number) => {
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
