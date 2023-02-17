import { useState, useCallback, useContext } from "react";
import { ToDoContext } from "../../../pages/Todo/Todo";
import todoApi from "../../../services/api/todo";
import { Todo } from "../../../types/todo";
import CancelBtn from "../Buttons/CancelBtn//CancelBtn";
import ConfirmBtn from "../Buttons/ConfirmBtn/ConfirmBtn";
import ModifyBtn from "../Buttons/ModifyBtn/ModifyBtn";
import RemoveBtn from "../Buttons/RemoveBtn/RemoveBtn";
import { S } from "./style";

export default function TodoItem({ todo }: { todo: Todo }) {
  const [todoData, setTodoData] = useState(todo);
  const [isModify, setIsModify] = useState(false);
  const [isChecked, setIsChecked] = useState(todo.isCompleted);
  const { getTodos } = useContext(ToDoContext);

  const handleChecked = useCallback(() => {
    setIsChecked((prev) => !prev);

    todoApi.updateTodo(todo.id, todo.todo, !isChecked);
  }, [todo.id, todo.todo, isChecked]);

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!window.confirm("정말 수정하시겠습니까?")) return;

    const {
      todoInput: { value },
    } = e.currentTarget;

    const data = await todoApi.updateTodo(todo.id, value, isChecked);

    setTodoData(data);
    getTodos();
    setIsModify(false);
  };

  return (
    <S.Container>
      {isModify ? (
        <S.Form onSubmit={handleUpdate}>
          <label>
            <input type="checkbox" checked={isChecked} onChange={handleChecked} />
            <S.ModifyInput
              type="text"
              name="todoInput"
              defaultValue={todoData.todo}
              data-testid="modify-input"
            />
          </label>
          <S.ButtonContainer>
            <ConfirmBtn />
            <CancelBtn onClick={() => setIsModify(false)} />
          </S.ButtonContainer>
        </S.Form>
      ) : (
        <>
          <label>
            <input type="checkbox" checked={isChecked} onChange={handleChecked} />
            <S.TodoText>{todoData.todo}</S.TodoText>
          </label>
          <S.ButtonContainer>
            <ModifyBtn onClick={() => setIsModify((prev) => !prev)} />
            <RemoveBtn id={todoData.id} />
          </S.ButtonContainer>
        </>
      )}
    </S.Container>
  );
}
