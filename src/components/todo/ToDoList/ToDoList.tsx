import { useContext } from "react";
import { ToDoContext } from "../../../pages/Todo/Todo";
import { Todo } from "../../../types/todo";
import TodoItem from "../TodoItem/TodoItem";
import { S } from "./style";

export default function ToDoList() {
  const { isLoading, todos } = useContext(ToDoContext);
  return (
    <S.Container>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        todos.map((todo: Todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </S.Container>
  );
}
