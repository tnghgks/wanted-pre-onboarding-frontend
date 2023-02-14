import { useEffect, createContext, useMemo } from "react";
import LogoutBtn from "../../components/todo/Buttons/LogoutBtn/LogoutBtn";
import TodoInput from "../../components/todo/TodoInput/TodoInput";
import ToDoList from "../../components/todo/ToDoList/ToDoList";
import useGetTodo from "../../hooks/todo/useGetTodo";
import { Todo } from "../../types/todo";
import { S } from "./style";

interface Props {
  isLoading: boolean;
  todos: Todo[];
  getTodos: () => Promise<void> | void;
}

export const ToDoContext = createContext<Props>({
  isLoading: true,
  todos: [],
  getTodos: () => {},
});

export default function Todos() {
  const [isLoading, todos, getTodos] = useGetTodo();
  const value = useMemo(() => ({ isLoading, todos, getTodos }), [isLoading, todos, getTodos]);

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
        <ToDoContext.Provider value={value}>
          <TodoInput />
          <ToDoList />
        </ToDoContext.Provider>
      </S.TodoContainer>
    </S.Container>
  );
}
