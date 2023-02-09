import { Todo } from "../../../types/todo";
import TodoItem from "../TodoItem/TodoItem";
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
        todos.map((todo: Todo) => <TodoItem key={todo.id} getTodos={getTodos} todo={todo} />)
      )}
    </S.Container>
  );
}
