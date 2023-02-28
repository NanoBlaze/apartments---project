import axios from "axios";
import { Product } from "../interfaces/Product";
import _ from "lodash";

const api: string = process.env.REACT_APP_API || "";

export const getUserCart = (): Promise<any> =>
  axios.get(`${api}carts`, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });

export const addToUserCart = (product: Product): Promise<any> => {
  let body = _.omit(product, ["_id", "__v"]);
  body.quantity = 1;
  return axios.post(`${api}carts`, body, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });
};

export const deleteCart = (id: string): Promise<any> =>
  axios.delete(`${api}carts/${id}`, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });

export const updateCart = (
  id: string,
  data: { quantity: number }
): Promise<any> =>
  axios.patch(`${api}carts/${id}`, data, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });
