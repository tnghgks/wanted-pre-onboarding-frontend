import { useEffect } from "react";
import LogoutBtn from "../../components/todo/LogoutBtn/LogoutBtn";
import TodoInput from "../../components/todo/TodoInput/TodoInput";
import ToDoList from "../../components/todo/ToDoList/ToDoList";
import useGetTodo from "../../hooks/todo/useGetTodo";
import { S } from "./style";

export default function Todos() {
  const [isLoading, todos, getTodos] = useGetTodo();

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <S.Container>
      <S.Header>
        <S.Title>투두 리스트</S.Title>
        <LogoutBtn />
      </S.Header>
      <S.TodoContainer>
        <TodoInput getTodos={getTodos} />
        <ToDoList isLoading={isLoading} todos={todos} getTodos={getTodos} />
      </S.TodoContainer>
    </S.Container>
  );
}
