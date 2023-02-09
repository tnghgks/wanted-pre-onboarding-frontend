import { AxiosError } from "axios";
import { axiosAuthInstance } from "./client";

const createTodo = async (todo: string) => {
  try {
    const response = await axiosAuthInstance.post("/todos", { todo });

    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
    console.log(error);
  }
};
const getTodos = async () => {
  try {
    const { data } = await axiosAuthInstance.get("/todos");

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
    console.log(error);
  }
};

const deleteTodo = async (TodoId: number) => {
  try {
    const response = await axiosAuthInstance.delete(`/todos/${TodoId}`);

    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
    console.log(error);
  }
};

const updateTodo = async (TodoId: number, todo: string, isCompleted: boolean) => {
  try {
    const response = await axiosAuthInstance.put(`/todos/${TodoId}`, {
      todo,
      isCompleted,
    });

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
    console.log(error);
  }
};

const todoApi = {
  createTodo,
  getTodos,
  deleteTodo,
  updateTodo,
};

export default todoApi;
