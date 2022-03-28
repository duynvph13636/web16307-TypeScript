import { UserType } from "../types/user";
import instance from "./instance";

export const Add = (signup: UserType) => {
  const url = "/signup";
  return instance.post(url, signup);
};
export const signin = (signin: any) => {
  const url = "/signin";
  console.log(123);
  
  return instance.post(url, signin);
};
