import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const successMsg = (message: string) => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
};

export const errorMsg = (message: string) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 4000,
  });
};
