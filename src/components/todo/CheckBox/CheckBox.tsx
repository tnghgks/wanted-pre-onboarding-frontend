import { useCallback, useState } from "react";
import todoApi from "../../../services/api/todo";
interface Props {
  id: number;
  todo: string;
  isCompleted: boolean;
}

export default function CheckBox({ id, todo, isCompleted }: Props) {
  const [isChecked, setIsChecked] = useState(isCompleted);

  const handleChecked = useCallback(() => {
    setIsChecked((prev) => !prev);
    todoApi.updateTodo(id, todo, !isChecked);
  }, [id, isChecked, todo]);

  return <input type="checkbox" checked={isChecked} onChange={handleChecked} />;
}
