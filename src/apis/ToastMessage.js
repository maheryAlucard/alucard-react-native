import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Toast(msg) {
  var toasMsg = "Hello World";
  const ToasMessage = () =>
    toast.dark(toasMsg, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  ToasMessage();
}
