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

const todoApi = {
  createTodo,
};

export default todoApi;
