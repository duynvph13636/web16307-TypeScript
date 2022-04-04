import { UserType } from "../types/user";
import instance from "./instance";

export const Add = (user: {}) => {
  const url = "/signup";
  return instance.post(url, user);
};
export const signin = (user: {}) => {
  const url = "/signin";
  return instance.post(url, user);
};
