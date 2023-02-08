import { AxiosError } from "axios";
import { axiosInstance } from "./client";

const signUp = async (body: { email: string; password: string }) => {
  try {
    const response = await axiosInstance.post("/auth/signup", body);

    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
    console.log(error);
  }
};

const signIn = async (body: { email: string; password: string }) => {
  try {
    const response = await axiosInstance.post("/auth/signin", body);

    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
    console.log(error);
  }
};

const authApi = {
  signUp,
  signIn,
};

export default authApi;
