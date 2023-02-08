import { useCallback, useState } from "react";
import todoApi from "../../services/api/todo";
import { Todo } from "../../types/todo";

export default function useGetTodo(): [boolean, Todo[], () => Promise<void>] {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getTodos = useCallback(async () => {
    const res = await todoApi.getTodos();
    setTodos(res);
    setIsLoading(false);
  }, []);

  return [isLoading, todos, getTodos];
}
