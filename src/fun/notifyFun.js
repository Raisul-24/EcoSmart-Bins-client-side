import { io } from "socket.io-client";
import { axiosPrivate } from "../axios/axiosprivate";

export const notifyFun = (email, massage) => {
  const date = new Date().toISOString();
  const obj = { email, massage, date };
  const socket = io(axiosPrivate.defaults.baseURL);
  socket.emit("notification", { type: "sent", sentData: obj, email: email });
};
