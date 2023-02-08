import { Todo } from "../../../types/todo";
import ModifyBtn from "../ModifyBtn/ModifyBtn";
import RemoveBtn from "../RemoveBtn/RemoveBtn";
import { S } from "./style";

interface Props {
  isLoading: boolean;
  todos: Todo[];
  getTodos: () => Promise<void>;
}

export default function ToDoList({ isLoading, todos, getTodos }: Props) {
  return (
    <S.Container>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        todos.map((item: Todo) => (
          <S.TodoItem key={item.id}>
            <label>
              <input type="checkbox" checked={item.isCompleted} />
              <S.TodoText>{item.todo}</S.TodoText>
            </label>
            <S.ButtonContainer>
              <ModifyBtn />
              <RemoveBtn />
            </S.ButtonContainer>
          </S.TodoItem>
        ))
      )}
    </S.Container>
  );
}
