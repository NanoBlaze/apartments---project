import axios from "axios";
import { Product } from "../interfaces/Product";
import _ from "lodash";

const api: string = process.env.REACT_APP_API || "";

export const addProduct = (newProduct: Product): Promise<any> => {
  return axios.post(`${api}products`, newProduct, {
    headers: {
      Authorization: `${sessionStorage.getItem("token")}`,
    },
  });
};

export const getAllProducts = (): Promise<any> => {
  return axios.get(`${api}products`, {
    headers: {
      Authorization: `${sessionStorage.getItem("token")}`,
    },
  });
};

export const getProduct = (id: string): Promise<any> => {
  return axios.get(`${api}products/${id}`, {
    headers: {
      Authorization: `${sessionStorage.getItem("token")}`,
    },
  });
};

export const getProductByUserId = (): Promise<any> => {
  return axios.get(`${api}products/my-products`, {
    headers: {
      Authorization: `${sessionStorage.getItem("token")}`,
    },
  });
};

export const editProduct = (product: Product): Promise<any> => {
  let body = _.omit(product, ["_id"]);
  return axios.put(`${api}products/${product._id}`, body, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });
};

export const deleteProduct = (id: string): Promise<any> =>
  axios.delete(`${api}products/${id}`, {
    headers: { Authorization: `${sessionStorage.getItem("token")}` },
  });
