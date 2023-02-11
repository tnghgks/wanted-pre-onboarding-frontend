import { toast } from "react-toastify";

export const notify = (text: string) => {
  toast.error(text, {
    role: "alert",
  });
};
