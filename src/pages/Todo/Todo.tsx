import LogoutBtn from "../../components/todo/LogoutBtn/LogoutBtn";
import TodoInput from "../../components/todo/TodoInput/TodoInput";
import ToDoList from "../../components/todo/ToDoList/ToDoList";
import { S } from "./style";

export default function Todos() {
  return (
    <S.Container>
      <S.Header>
        <S.Title>투두 리스트</S.Title>
        <LogoutBtn />
      </S.Header>
      <S.TodoContainer>
        <TodoInput />
        <ToDoList />
      </S.TodoContainer>
    </S.Container>
  );
}
