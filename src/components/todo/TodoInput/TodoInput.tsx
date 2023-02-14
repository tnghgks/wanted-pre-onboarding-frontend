import { useCallback, useContext } from "react";
import { S } from "./style";
import iconEnter from "../../../assets/icon/icon-enter.svg";
import todoApi from "../../../services/api/todo";
import useInput from "../../../hooks/common/useInput";
import { ToDoContext } from "../../../pages/Todo/Todo";

export default function TodoInput() {
  const { getTodos } = useContext(ToDoContext);
  const [todo] = useInput("");

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!todo.value) {
        return alert("투두를 입력해주세요.");
      }

      await todoApi.createTodo(todo.value);
      getTodos();
      todo.setValue("");
    },
    [getTodos, todo]
  );

  return (
    <S.Container onSubmit={handleSubmit}>
      <S.Button data-testid="new-todo-add-button" type="submit">
        <img src={iconEnter} alt="입력 버튼" />
      </S.Button>
      <S.Input type="text" data-testid="new-todo-input" {...todo} />
    </S.Container>
  );
}
