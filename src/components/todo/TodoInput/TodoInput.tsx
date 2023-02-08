import { useCallback } from "react";
import { S } from "./style";
import iconEnter from "../../../assets/icon/icon-enter.svg";
import todoApi from "../../../services/api/todo";
import useInput from "../../../hooks/common/useInput";

interface Props {
  getTodos: () => Promise<void>;
}

export default function TodoInput({ getTodos }: Props) {
  const [todo] = useInput("");

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const response = await todoApi.createTodo(todo.value);

      getTodos();

      if (response?.status === 400) {
        alert("투두를 입력해주세요.");
      }
    },
    [todo.value, getTodos]
  );

  return (
    <S.Container onSubmit={handleSubmit}>
      <S.Button data-testid="new-todo-add-button">
        <img src={iconEnter} alt="입력 버튼" />
      </S.Button>
      <S.Input type="text" data-testid="new-todo-input" {...todo} />
    </S.Container>
  );
}
