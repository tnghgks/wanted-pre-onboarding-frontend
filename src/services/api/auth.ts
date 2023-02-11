import { AxiosError } from "axios";
import { notify } from "../../util/toast";
import { axiosInstance } from "./client";

const signUp = async (body: { email: string; password: string }) => {
  try {
    const response = await axiosInstance.post("/auth/signup", body);

    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      notify(error.response?.data.message);
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
      if (error.response?.status === 401) {
        notify("비밀번호 또는 아이디가 틀렸습니다.");
      } else {
        notify(error.response?.data.message);
      }

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
