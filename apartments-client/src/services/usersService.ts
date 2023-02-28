import axios from "axios";
import { User } from "../interfaces/User";
import jwt_decode from "jwt-decode";

const api: string = process.env.REACT_APP_API || "";

export const addUser = (newUser: User): Promise<any> => {
  return axios.post(`${api}register`, newUser);
};
export const checkUser = (user: User): Promise<any> => {
  return axios.post(`${api}login`, user);
};
export const getUser = (): Promise<any> => {
  return axios.get(`${api}profile`, {
    headers: {
      Authorization: `${sessionStorage.getItem("token")}`,
    },
  });
};

export const getIsPoster = () => {
  return (jwt_decode(sessionStorage.getItem("token") as string) as any)
    .isPoster;
};
