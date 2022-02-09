import { Regist } from "../store/process/types";
import client from "../utils/client";

export const regist = (data: Regist) => {
  const formData: FormData = new FormData();

  Object.keys(data).forEach((k) => {
    console.log(k);
    formData.append(k, data[k]);
  });

  return client.post("/", formData);
};